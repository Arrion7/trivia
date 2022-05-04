import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsComponent } from './questions/questions.component';
import { LoginComponent } from './connexion/login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RegisterComponent } from './connexion/register/register.component';
import { CategoryComponent } from './category/category.component';
import { GamesComponent } from './games/games.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DailyQuestionComponent } from './daily-question/daily-question.component';
import { AuthService } from './guards/auth.service';

const routes: Routes = [
  {path:"", redirectTo:"login",pathMatch:"full"},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"questions", component:QuestionsComponent, canActivate:[AuthService]},
  {path:"category", component:CategoryComponent, canActivate:[AuthService]},
  {path:"games", component:GamesComponent, canActivate:[AuthService]},
  {path:"homepage", component:HomepageComponent, canActivate:[AuthService]},
  {path:"daily", component:DailyQuestionComponent, canActivate:[AuthService]},
  {path:"welcome", component:WelcomeComponent, canActivate:[AuthService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
