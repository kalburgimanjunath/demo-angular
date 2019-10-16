import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.less']
})
export class AddQuestionsComponent implements OnInit {

  constructor(private fb: FormBuilder,private questionsService: QuestionsService) { }

  questionForm = this.fb.group({
    id: [1,Validators.required],
    question: ['',Validators.required],
    answertype: ['',Validators.required],
    answers: ['',Validators.required]
  });

  ngOnInit() {
  }
  onSubmit(){
    console.warn(this.questionForm.value);
    this.questionsService.saveQuestionData(this.questionForm.value);
  }

}
