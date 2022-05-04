import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http : HttpClient) { }
  // getQuestionJson(){
  //   return this.http.get<any>('https://opentdb.com/api.php?amount=10');
  //   //return this.http.get<any>("assets/questions.json");
  // }
  getQuestionByCategoryJson(id: any){
    if(id > 0){
      return this.http.get<any>(`https://opentdb.com/api.php?amount=10&category=${id}`);
    }else{
      return this.http.get<any>('https://opentdb.com/api.php?amount=10');
    }
    
  }
}
