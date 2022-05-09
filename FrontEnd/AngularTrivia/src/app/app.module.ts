import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { QuestionsComponent } from './questions/questions.component';
import { HeaderComponent } from './header/header.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { ConnexionComponent } from './connexion/connexion.component';
import { LoginComponent } from './connexion/login/login.component';
import { RegisterComponent } from './connexion/register/register.component';
import { FormsModule} from '@angular/forms';
import { HomepageComponent } from './homepage/homepage.component';
// import { LoginComponent } from './login/login.component';
import { GamesComponent } from './games/games.component';
import { CategoryComponent } from './category/category.component';
import { DailyQuestionComponent } from './daily-question/daily-question.component';
import { ReactiveFormsModule } from '@angular/forms';
import { XyzComponent } from './xyz/xyz.component';
import { UserStatisticsComponent } from './user-statistics/user-statistics.component';



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    QuestionsComponent,
    HeaderComponent,
    ConnexionComponent,
    LoginComponent,
    RegisterComponent,
    HomepageComponent,
    GamesComponent,
    CategoryComponent,
    DailyQuestionComponent,
    XyzComponent,
    UserStatisticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
