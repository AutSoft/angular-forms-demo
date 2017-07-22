import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Gender } from '../gender.enum';
import { CustomValidators } from 'ng2-validation';
import { User } from '../user';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnChanges {
  @Input() user: User;
  @Output() userChange = new EventEmitter<User>();
  submitted = false;
  formGroup: FormGroup;
  genderOptions = Object.keys(Gender);

  constructor(private formBuilder: FormBuilder) {
    this.initForm(this.formBuilder);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['user']) {
      this.formGroup.patchValue(this.user);
      this.submitted = true;
      console.log(this.formGroup.controls['username'].value);
    }
  }

  initForm(formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group({
      username: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      passwordAgain: null,
      gender: [null, Validators.required],
      phone: [null, Validators.required],
      checkbox: false
    });

    this.formGroup.controls['checkbox'].valueChanges.subscribe(newValue => {
      const phoneCtrl = this.formGroup.controls['phone'];
      if (newValue && phoneCtrl.disabled) {
        phoneCtrl.enable({emitEvent: false});
      } else if (!newValue && phoneCtrl.enabled) {
        phoneCtrl.disable({emitEvent: false});
      }
    });

    this.formGroup.controls['phone'].valueChanges.subscribe(newValue => {
      let checkbox = this.formGroup.controls['checkbox'];
      if (newValue && !checkbox.value) {
        checkbox.setValue(true);
      } else if (!newValue && checkbox.value) {
        checkbox.setValue(false);
      }
    });

    this.formGroup.controls['passwordAgain'].setValidators(CustomValidators.equalTo(this.formGroup.controls['password']));
  }

  submit() {
    this.submitted = true;
    const user = this.formGroup.value;
    delete user.passwordAgain;
    delete user.checkbox;
    console.log(user);
    this.userChange.emit(user);
  }

}
