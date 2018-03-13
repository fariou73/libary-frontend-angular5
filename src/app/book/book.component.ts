import {
  Component,
  OnInit,
} from '@angular/core';
import { BookService } from './book.service';
import { HttpClient } from '@angular/common/http';
import { Book } from './book.model';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'book',
  templateUrl: './book.component.html'
})
export class BookComponent implements OnInit {
  public books: Book[];
  public currentPage = 1;
  public pageSize = 4;

  constructor(
    private bookService: BookService,
    public auth: AuthService
  ) { }

  public ngOnInit() {
    this.loadAll();
  }

  public delete(id) {
    this.bookService.delete(id).subscribe(
      (resp) => this.loadAll()
    );
  }

  public getBooksPage() {
    return this.books.slice(
      (this.currentPage - 1) * this.pageSize,
      this.currentPage * this.pageSize);
  }

  private loadAll() {
    this.bookService.getAll().subscribe((res: any) =>
      this.books = res
    );
  }
}
