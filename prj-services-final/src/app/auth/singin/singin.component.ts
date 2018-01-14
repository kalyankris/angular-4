import { AuthSerice } from './../auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {

  constructor(private authSerice:AuthSerice) { }

  ngOnInit() {
  }

  onSignin(form:NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authSerice.signinUser(email,password);
    this.authSerice.loggedIn = true;
  }

}
