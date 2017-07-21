import { Component } from '@angular/core';
import { User } from './user';
import { Gender } from './gender.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User = {
    username: 'formDemo',
    email: 'form@demo.com',
    password: 'demo',
    gender: Gender.MALE,
    phone: '1234567'
  };
}
