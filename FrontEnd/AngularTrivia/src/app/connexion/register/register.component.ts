import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private form: FormBuilder) { }

  
  username: string = "debug";
  password: string = "debug pass";

  ngOnInit(): void {

  }


}
