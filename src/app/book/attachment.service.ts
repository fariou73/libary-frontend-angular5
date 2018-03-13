import { HttpClient, HttpHeaders } from '@angular/common/http';
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
export class AttachmentService {
  private baseUrl = '/api/attachment'

  constructor(
    public http: HttpClient
  ) { }

  public upload(file: File): Observable<any> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'multipart/form-data');

    const formData: FormData = new FormData();
    formData.append('file', file);

    return this.http.post(this.baseUrl, formData);
  }
}
