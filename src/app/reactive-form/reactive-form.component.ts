import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Gender } from '../gender.enum';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  formGroup: FormGroup;
  genderOptions = Object.keys(Gender);

  constructor(formBuilder: FormBuilder) {
    this.initForm(formBuilder);
  }

  initForm(formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group({
      username: ['zizi', Validators.required]
    });
  }

  ngOnInit() {
  }

  submit() {
    console.log(this.formGroup.value);
  }

}
