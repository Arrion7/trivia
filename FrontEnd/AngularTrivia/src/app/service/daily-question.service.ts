import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'
import { Daily } from '../models/Daily';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DailyQuestionService {

  constructor(private http : HttpClient) { }

  getDaily(){
    return this.http.get<any>(`${environment.apiBaseURL}/Item/DailyQuestion`);
    //return this.http.get<any>(`https://localhost:7143/api/Item/DailyQuestion`);
  }

  getQuestionJson(){
    return this.http.get<any>('https://opentdb.com/api.php?amount=1');
  }


}
