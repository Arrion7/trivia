import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { HttpHeaders } from '@angular/common/http';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error = false;
  submitted = false;
  idCategory = 0;

  public getCredentials(name: string, pass: string)
  {
    let form = this.loginForm;
  }

  public loginForm = this.formBuilder.group({
    username:['', Validators.required],
    password:['', Validators.required]
  })
  constructor( private formBuilder: FormBuilder,private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

 
  onSubmit(){
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
    })
    let username  = this.loginForm.controls["username"].value;
    let password  = this.loginForm.controls["password"].value;
    this.submitted = true;

    this.loginService.getByUsername(username).subscribe((data: any)=>{
      if(data != null && data.length>0  && data[0].password === password)
      {
        localStorage.setItem("username", username);

        this.router.navigate(["../welcome"]);
      }
      
      else
      {

        localStorage.setItem("idCategory", "0");
        this.router.navigate(["../games"]);
      }
    });
  }


}
