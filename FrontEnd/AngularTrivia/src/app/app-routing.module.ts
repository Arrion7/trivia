import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsComponent } from './questions/questions.component';
import { LoginComponent } from './connexion/login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RegisterComponent } from './connexion/register/register.component';
import { AuthService } from './guards/auth.service';

const routes: Routes = [
  {path:"", redirectTo:"login",pathMatch:"full"},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"welcome", component:WelcomeComponent, canActivate:[AuthService]},
  {path:"questions", component:QuestionsComponent, canActivate:[AuthService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
