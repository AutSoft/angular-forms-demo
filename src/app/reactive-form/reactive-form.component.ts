import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Gender } from '../gender.enum';
import { CustomValidators } from 'ng2-validation';
import { User } from '../user';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  @Input() user: User;
  formGroup: FormGroup;
  genderOptions = Object.keys(Gender);

  constructor(private formBuilder: FormBuilder) {
  }

  initForm(formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group({
      username: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      passwordAgain: null,
      gender: [null, Validators.required],
      phone: [null, Validators.required]
    });

    this.formGroup.patchValue(this.user);

    this.formGroup.controls['passwordAgain'].setValidators(CustomValidators.equalTo(this.formGroup.controls['password']));
    this.formGroup.controls['phone'].disable();
  }

  ngOnInit() {
    this.initForm(this.formBuilder);
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
