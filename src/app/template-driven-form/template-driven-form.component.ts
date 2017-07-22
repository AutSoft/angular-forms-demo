import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Gender } from '../gender.enum';
import { User } from '../user';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  @Input() user: User;
  @Output() userChange = new EventEmitter<User>();
  genderOptions = Object.keys(Gender);

  ngOnInit() {
  }

  submit() {
    console.log(this.user);
    this.userChange.emit(Object.assign({}, this.user));
  }
}
