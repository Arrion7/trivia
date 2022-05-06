import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  private categoryurl : string = "";

  constructor(private http : HttpClient) { }
<<<<<<< HEAD
  getQuestionJson(){
    let baseurl = 'https://opentdb.com/api.php?amount=10';
    return this.http.get<any>(baseurl + this.categoryurl);
    //return this.http.get<any>("assets/questions.json");
=======
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
    
>>>>>>> ce710a5fb686d738589ddf8649416ef58259eed7
  }

  setCategory(category: number)
  {
    this.categoryurl = `&category=${category}`;
  }
}
