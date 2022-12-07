import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent implements OnInit {

  constructor() { }

@ViewChild('form', {static:true}) form!:NgForm;

userForm:any = {
  nome: '',
  alterego:'',
  superpoteri:'',
  pianeta:'',
  nemico: '',
  debolezza:''
}

  ngOnInit(): void {
  }

submit() {
console.log('Form inviato', this.form);
this.userForm.nome = this.form.value.userInfo.nome;
this.userForm.alterego = this.form.value.userInfo.alterego;
this.userForm.superpoteri = this.form.value.userInfo.superpoteri;
this.userForm.pianeta = this.form.value.userInfo.pianeta;
this.userForm.nemico = this.form.value.userInfo.nemico;
this.userForm.debolezza = this.form.value.userInfo.debolezza;

this.form.reset();
}

}
