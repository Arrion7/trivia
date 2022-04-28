import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { QuestionsComponent } from './questions/questions.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { GamesComponent } from './games/games.component';


const routes: Routes = [
  {path:"", redirectTo:"welcome",pathMatch:"full"},
  {path:"homepage", component:HomepageComponent},
  {path:"welcome", component:WelcomeComponent},
  {path:"questions", component:QuestionsComponent},
  {path:"login", component:LoginComponent},
  {path:"games", component:GamesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
