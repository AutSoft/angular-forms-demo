import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Gender } from '../gender.enum';
import { CustomValidators } from 'ng2-validation';

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
      username: ['zizi', Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      passwordAgain: null,
      gender: [null, Validators.required],
      phone: [null, Validators.required]
    });
    this.formGroup.controls['passwordAgain'].setValidators(CustomValidators.equalTo(this.formGroup.controls['password']));
    this.formGroup.controls['phone'].disable();
  }

  ngOnInit() {
  }

  submit() {
    console.log(this.formGroup.value);
  }

  togglePhoneInputState(event) {
    if (event.target.checked) {
      this.formGroup.controls['phone'].enable();
    } else {
      this.formGroup.controls['phone'].disable();
    }
  }

}
