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

const routes: Routes = [
  {path:"", redirectTo:"login",pathMatch:"full"},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"welcome", component:WelcomeComponent},
  {path:"questions", component:QuestionsComponent},
  {path:"questions", component:QuestionsComponent},
  {path:"category", component:CategoryComponent},
  {path:"games", component:GamesComponent},
  {path:"homepage", component:HomepageComponent},
  {path:"daily", component:DailyQuestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
