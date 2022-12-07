import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  form!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      userInfo: this.fb.group({
        nome: this.fb.control(null, (Validators.required)),
        alterego: this.fb.control(null, (Validators.required)),
        potere: this.fb.control(null, (Validators.required)),
        pianeta: this.fb.control(null, (Validators.required, Validators.min(5))),
        nemico: this.fb.control(null, (Validators.required, Validators.max(10))),
        debolezze: ''
      })
    })
  }

  submit() {
    this.form.reset();
  }
}
