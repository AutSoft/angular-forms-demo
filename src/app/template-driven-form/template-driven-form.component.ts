import { Component, OnInit } from '@angular/core';
import { Gender } from '../gender.enum';
import { User } from '../user';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  genderOptions = Object.keys(Gender);
  user: User;

  constructor() {
    this.user = new User();
    this.user.username = 'zizi';
  }

  ngOnInit() {
  }

  submit() {
    console.log(this.user);
  }
}
