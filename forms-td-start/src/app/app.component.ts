import { Component ,ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') singup : NgForm;
  defaultQuestion = 'pet';
  answer ='';
  genders =['male','female'] ;
  user = {
    username:'',
    email:'',
    secretoption:'',
    answer:'',
    gender:''
  };
  submitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.singup.setValue({
    //   userData:{
    //     username : suggestedName,
    //     email:''
    //   },
    //   secretoption:'pet',
    //   questionAnswer:'',
    //   gender:'male'
    // });
    this.singup.form.patchValue({
      userData:{
          username : suggestedName
        }
    });
  }
  // onSubmit(form:NgForm){
  //   console.log(form);    
  // }
  onSubmit(){
    this.submitted = true;
    this.user.username = this.singup.value.userData.username;
    this.user.email = this.singup.value.userData.email;
    this.user.secretoption = this.singup.value.secretoption;
    this.user.answer = this.singup.value.questionAnswer;
    this.user.gender = this.singup.value.gender;
    this.singup.reset();
  }
  
}
