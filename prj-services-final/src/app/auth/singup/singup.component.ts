import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSignup(form:NgForm) {
    const email = form.value.email;
    const password = form.value.password;
  }

}
