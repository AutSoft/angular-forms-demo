import { Component, OnInit } from '@angular/core';
import { Gender } from '../gender.enum';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  genderOptions = Object.keys(Gender);

  constructor() { }

  ngOnInit() {
  }

}
