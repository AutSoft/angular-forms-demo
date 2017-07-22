import {
  Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild
} from '@angular/core';
import { Gender } from '../gender.enum';
import { User } from '../user';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit, OnChanges {
  @Input() user: User;
  @Output() userChange = new EventEmitter<User>();
  @ViewChild('checkbox') checkbox: ElementRef;
  genderOptions = Object.keys(Gender);

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['user']) {
      this.checkbox.nativeElement.checked = this.user.phone;
    }
  }

  submit() {
    console.log(this.user);
    this.userChange.emit(Object.assign({}, this.user));
  }
}
