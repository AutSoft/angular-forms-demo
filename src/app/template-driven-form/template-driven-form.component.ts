import { Component, Input, OnInit } from '@angular/core';
import { Gender } from '../gender.enum';
import { User } from '../user';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  genderOptions = Object.keys(Gender);
  @Input() user: User;

  ngOnInit() {
  }

  submit() {
    console.log(this.user);
  }
}
