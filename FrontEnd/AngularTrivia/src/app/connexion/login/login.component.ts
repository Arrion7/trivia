import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error = false;
  submitted = false;
  idCategory = 0;

  public loginForm=this.formBuilder.group({
    username:['', Validators.required],
    password:['', Validators.required]
  })
  constructor( private formBuilder: FormBuilder,private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    let username  = this.loginForm.controls["username"].value;
    let password  = this.loginForm.controls["password"].value;
    this.submitted = true;
    this.loginService.getByUsername(username).subscribe((data: any)=>{
      if(data != null && data.length>0  && data[0].password === password){
        localStorage.setItem("username", username);
        localStorage.setItem("idCategory", "0");
        this.router.navigate(["../games"]);
      }else{
        this.error = true;
      }


    });
  }
}
