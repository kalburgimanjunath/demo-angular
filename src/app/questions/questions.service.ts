import { Injectable } from '@angular/core';
import {QUESTIONS} from '../shared/mock-questions';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor() { }
  questions = [];
  getAllQuestions(){
    return this.questions = QUESTIONS;
  }
  saveQuestionData(data){
    this.questions.push(data);
  }

}
