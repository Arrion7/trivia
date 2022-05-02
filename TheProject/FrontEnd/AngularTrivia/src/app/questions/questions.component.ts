import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../service/questions.service';
import { decodeEntity } from 'html-entities';
import { interval } from 'rxjs';
import { Router } from '@angular/router';

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
  constructor(private questionService: QuestionsService, private router:Router) { }

  ngOnInit(): void {
    this.name = localStorage.getItem("name")!;
    this.getAllQuestions();
    this.startCounter();
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
  getAllQuestions() {
    this.questionService.getQuestionJson()
      .subscribe(res => {
        this.questionList = decodeEntity(res.results);
        for(let i =0; i < this.questionList.length; i++){
          this.questionList[i].incorrect_answers.push(this.questionList[i].correct_answer);
          console.log(this.questionList[i].incorrect_answers);
          this.questionListRand[i] = this.randomArrayShuffle(this.questionList[i].incorrect_answers);
          console.log(this.questionList[i].incorrect_answers);
          console.log(this.questionList[i].incorrect_answers);
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
  reinitialise() {
    this.currentQuestion = 0;
    this.points = 0;
    this.getAllQuestions();
    this.resetCounter();
  }

  answer(currentQtn: number, choice: any) {
    if(currentQtn === this.questionList.length - 1){
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
