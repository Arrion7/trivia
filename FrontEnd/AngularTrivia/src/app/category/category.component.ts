import { Component, OnInit } from '@angular/core';

import { QuestionsService } from '../service/questions.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {



  constructor(private service: QuestionsService, private router:Router) { }
  
  ngOnInit(): void {
  }


  SendCategory(category: number): void
  {
    this.service.setCategory(category);
    console.log(`category is now ${category}`);
  }


  startGame(id: any){
    localStorage.setItem("idCategory", id);
  }

}
