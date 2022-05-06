import { Component, OnInit } from '@angular/core';
import { DailyQuestionService } from '../service/daily-question.service';
import { interval } from 'rxjs';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { decodeEntity } from 'html-entities';

@Component({
  selector: 'app-questions',
  templateUrl: './daily-question.component.html',
  styleUrls: ['./daily-question.component.scss']
})
export class DailyQuestionComponent implements OnInit {

  public name: string = "";
  public questionList: any = [];
  public questionListRand: any = [];
  public currentQuestion: number = 0;
  private setCounter: number = 30;
  counter = this.setCounter;
  public intervals: any;
  public correctAnswer: number = 0;
  isGameOver : boolean = false;
  public result: string = "Better luck next time!";
  public correctAns : string = "";
  constructor(private dailyQuestionService: DailyQuestionService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.name = localStorage.getItem("name")!;
    this.getAllQuestions();
    this.startCounter();
  }
  getAllQuestions() {
    this.dailyQuestionService.getQuestionJson()
      .subscribe(res => {
        this.questionList = decodeEntity(res.results);
        this.questionList[0].incorrect_answers.push(this.questionList[0].correct_answer);
        this.questionListRand[0] = this.randomArrayShuffle(this.questionList[0].incorrect_answers);
      })
  }

  public getDecoded(value: any): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(value);
 }
  answer(currentQtn: number, choice: any) {
    if(currentQtn === this.questionList.length - 1){
      this.isGameOver = true;
      this.stopCounter();
    }
    var quota  = this.counter/this.setCounter;

    if (this.questionList[currentQtn]?.correct_answer === choice)
      this.result = "Congrats! You got today's daily question correct!";

    this.correctAns = `The correct answer was: ${this.questionList[currentQtn]?.correct_answer}`;
  }

  startCounter() {
    this.intervals = interval(1000)
      .subscribe(val => {
        this.counter--;
        if (this.counter === 0) {
          this.isGameOver = true;
          this.stopCounter();
          this.result = "Oh no! You ran out of time, better luck next time."
        }
      });
    setTimeout(() => {
      this.intervals.unsubscribe();
    }, 600000);
  }
  stopCounter() {
    this.intervals.unsubscribe();
    this.counter = 0;

  }

  randomArrayShuffle(array:any) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

}
