import {
  Component,
  OnInit
} from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  public principal = {
    username: '',
    password: ''
  };
  public error = null;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  public submitLogin() {
    this.authService.login(this.principal.username, this.principal.password).subscribe(
      (res: any) => {
        this.error = null;
        this.authService.updateAuth(true);
        this.router.navigate(['/books']);
        },
      (res: any) => {
        this.error = 'Некорректно указан логин или пароль';
      }
    );
  }
}
