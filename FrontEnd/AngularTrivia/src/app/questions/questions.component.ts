import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../service/questions.service';
import { interval } from 'rxjs';
import { Router } from '@angular/router';
import { Constants } from '../help/constants';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  public name: string = "";
  public questionList: any = [];
  public questionListRand: any = [];
  public currentQuestion: number = 0;
  public points: number = 0;
  private setCounter: number = 30;
  private setHard: number = 2000;
  private setMedium: number = 1500;
  private setEasy: number = 1000;
  counter = this.setCounter;
  public intervals: any;
  progress: string = "0";
  public correctAnswer: number =0;
  isGameOver : boolean = false;
  public idCategory: string = "0";
  constructor(private questionService: QuestionsService, private router:Router, private sanitizer: DomSanitizer) { }
  
 
 public getDecoded(value: any): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(value);
 }

  ngOnInit(): void {
    this.name = localStorage.getItem(Constants.UserName)!;
    this.idCategory = localStorage.getItem("idCategory")!;
    this.getAllQuestions(this.idCategory);
    this.startCounter();
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
  getAllQuestions(id: any) {
    this.questionService.getQuestionByCategoryJson(id)

      .subscribe((res: { results: any; }) => {
        console.log(res);
        this.questionList = res.results;
        for(let i =0; i < this.questionList.length; i++){
          this.questionList[i].incorrect_answers.push(this.questionList[i].correct_answer);
          this.questionListRand[i] = this.randomArrayShuffle(this.questionList[i].incorrect_answers);
        }
      });
      
  }
  nextQuestions() {
    this.currentQuestion++;
    this.counter = this.setCounter;
    this.progress = this.getProgress();

  }
  previousQuestions() {
    this.currentQuestion--;
    this.counter = this.setCounter;
    this.progress = this.getProgress();

  }
  reinitialize() {
    this.currentQuestion = 0;
    this.points = 0;
    this.getAllQuestions(this.idCategory);
    this.resetCounter();
  }

  answer(currentQtn: number, choice: any) {
    if(currentQtn >= this.questionList.length - 1){
      this.isGameOver = true;
      this.stopCounter();
    }
    var quota  = this.counter/this.setCounter;
    if (this.questionList[currentQtn]?.correct_answer === choice) {
      if (this.questionList[currentQtn]?.difficulty === "hard") {
        this.points += Math.round(this.setHard * quota);
      } else if (this.questionList[currentQtn]?.difficulty === "medium") {
        this.points += Math.round(this.setMedium * quota);
      } else {
        this.points += Math.round(this.setEasy * quota);
      }
      this.correctAnswer++;
    }
    this.currentQuestion++;
    this.counter = this.setCounter;
    this.progress = this.getProgress();
  }

  startCounter() {
    this.intervals = interval(1000)
      .subscribe(val => {
        this.counter--;
        if (this.counter === 0) {
          this.currentQuestion++;
          if(this.currentQuestion >= this.questionList.length - 1){
            this.isGameOver = true;
            this.stopCounter();
          }
          this.counter = this.setCounter;
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
  resetCounter() {
    this.stopCounter();
    this.counter = this.setCounter;
    this.startCounter();
    this.progress = "0";
  }

  getProgress() {
    this.progress = (100 * this.currentQuestion / this.questionList.length).toString();
    return this.progress;
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
  reload(){
    window.location.reload();
  }

}
