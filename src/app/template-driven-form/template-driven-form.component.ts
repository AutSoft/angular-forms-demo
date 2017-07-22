import {
  Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild
} from '@angular/core';
import { Gender } from '../gender.enum';
import { User } from '../user';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit, OnChanges {
  @Input() user: User;
  @Output() userChange = new EventEmitter<User>();
  @ViewChild('checkbox') checkbox: ElementRef;
  @ViewChild('form') form: NgForm;
  @ViewChild('usernameCtrl') usernameCtrl: NgModel;
  genderOptions = Object.keys(Gender);
  initedFromOutside = false;

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['user']) {
      this.checkbox.nativeElement.checked = this.user.phone;
      this.initedFromOutside = true;
      console.log(this.usernameCtrl.value);
      setTimeout(() => {
        console.log(this.usernameCtrl.value);
      }, 0);
    }
  }

  submit() {
    console.log(this.user);
    this.userChange.emit(Object.assign({}, this.user));
  }
}
