import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

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

  onSubmit(){
    let username  = this.RegisterForm.controls["username"].value;
    let password  = this.RegisterForm.controls["password"].value;
    this.submitted = true;
    this.loginService.register(username).subscribe((data: any)=>{
      if(data != null && data.length>0  && data[0].password === password){
        localStorage.setItem("username", username);
        localStorage.setItem("idCategory", "0");
        this.router.navigate(["../welcome"]);
      }else{
        this.error = true;
      }


    });
  }

}
