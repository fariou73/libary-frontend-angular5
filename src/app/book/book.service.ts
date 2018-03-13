import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Book } from './book.model';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BookService {
  private baseUrl = '/api/book'

  constructor(
    public http: HttpClient
  ) { }

  public getAll(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  public getById(id): Observable<Book> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  public save(book): Observable<Book> {
    return this.http.post(this.baseUrl, book);
  }

  public update(id, book): Observable<Book> {
    return this.http.put(`${this.baseUrl}/${id}`, book);
  }

  public delete(id) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
