import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../service/questions.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {


  

  constructor(private service: QuestionsService) { }
  
  ngOnInit(): void {
  }

  SendCategory(category: number): void
  {
    this.service.setCategory(category);
    console.log(`category is now ${category}`);
  }

}
