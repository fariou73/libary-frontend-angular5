import { Routes } from '@angular/router';
import { LoginComponent } from './login';
import { NoContentComponent } from './no-content';
import { HomeComponent } from './home';
import { BookComponent } from './book';
import { BookDetailComponent } from './book/book.detail.component';

export const ROUTES: Routes = [
  { path: '',  component: HomeComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'books', component: BookComponent },
  { path: 'books/new', component: BookDetailComponent },
  { path: 'books/:id', component: BookDetailComponent },
  { path: '**',    component: NoContentComponent },
];
