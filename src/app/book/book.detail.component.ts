import {
  Component, OnDestroy,
  OnInit,
} from '@angular/core';
import { BookService } from './book.service';
import { HttpClient } from '@angular/common/http';
import { Book } from './book.model';
import { AuthService } from '../shared/auth.service';
import { AttachmentService } from './attachment.service';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'book-detail',
  templateUrl: './book.detail.component.html'
})
export class BookDetailComponent implements OnInit {
  public book: Book;
  private subscription: Subscription;

  constructor(
    private router: Router,
    private bookService: BookService,
    private attachmentService: AttachmentService,
    public auth: AuthService,
    private route: ActivatedRoute
  ) { }

  public ngOnInit() {
    this.route.params.subscribe( (params) => {
      if (params['id']) {
        this.load(params['id']);
      } else {
        this.book = new Book();
      }
    });
  }

  public load(id) {
    this.bookService.getById(id).subscribe((book) => this.book = book);
  }

  public uploadFile($event) {
    const files = $event.target.files || $event.srcElement.files;
    const file = files[0];

    this.attachmentService.upload(file).subscribe( (response) =>
      this.book.attachmentId = response
    );
  }

  public save() {
    if (this.book.id) {
      this.bookService.update(this.book.id, this.book)
        .subscribe( (book) => this.onSaveSuccess(book.id));
    } else {
      this.bookService.save(this.book)
        .subscribe( (book) => this.onSaveSuccess(book.id));
    }
  }

  private onSaveSuccess(id) {
    this.router.navigate([`/books/${id}`]);
  }

}
