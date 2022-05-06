import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  private categoryurl : string = "";

  constructor(private http : HttpClient) { }
  getQuestionJson(){
    let baseurl = 'https://opentdb.com/api.php?amount=10';
    return this.http.get<any>(baseurl + this.categoryurl);
    //return this.http.get<any>("assets/questions.json");
  }

  setCategory(category: number)
  {
    this.categoryurl = `&category=${category}`;
  }
}
