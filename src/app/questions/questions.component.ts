import { Component, OnInit } from '@angular/core';
import { Questions} from '../shared/questions';
import { QuestionsService } from './questions.service';
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.less']
})
export class QuestionsComponent implements OnInit {

  constructor(private qust: QuestionsService) { }
  questions = [];
  isAddQuestions = false;

  addQuestions(){
    this.isAddQuestions = true;
  }

  ngOnInit() {
    //this.questions = this.qust.getAllQuestions();
  }

  ngDoCheck(){
    this.questions = this.qust.getAllQuestions();
  }

}
