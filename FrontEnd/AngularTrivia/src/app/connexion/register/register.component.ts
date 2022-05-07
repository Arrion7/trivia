import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { User } from 'src/app/models/user';
import { HttpHeaders, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {



  
  username: string = "debug";
  password: string = "debug pass";

  constructor(private formBuilder: FormBuilder,private loginService: LoginService, private router: Router) { }


  ngOnInit(): void {

  }
  error = false;
  submitted = false;
  idCategory = 0;

  public RegisterForm=this.formBuilder.group({
    username:['', Validators.required],
    password:['', Validators.required]
  })
  private user: User = new User();

  onSubmit(){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
    })
    let username  = this.RegisterForm.controls["username"].value;
    let password  = this.RegisterForm.controls["password"].value;
    this.user.username = username;
    this.user.password = password;

    this.submitted = true;
    // this.loginService.register(this.user).subscribe((data: any)=>{
    //   if(data != null && data.length>0  && data[0].password === password){
    //     localStorage.setItem("username", username);
    //     localStorage.setItem("password", password);
    //     localStorage.setItem("idCategory", "0");
    //     this.router.navigate(["../welcome"]);
    //   }
    //   else
    //   {
    //     this.error = true;
    //   }


    // });
    this.loginService.register(this.user).subscribe();

  }


}
