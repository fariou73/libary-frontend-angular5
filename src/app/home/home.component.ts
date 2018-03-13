import {
  Component,
  OnInit
} from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  constructor(
    public auth: AuthService
  ) {}
}
