import { Component, OnInit } from '@angular/core';
import { Candidate } from '../../shared/candidate';
import { Validators, FormBuilder } from '@angular/forms';
import { CandidateService } from '../candidate.service';
@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['./add-candidate.component.less']
})
export class AddCandidateComponent implements OnInit {
  candidateService: any;

  constructor(private fb: FormBuilder,private cs: CandidateService) { }
  candidates = Candidate;

  candidateprofileForm = this.fb.group({
    id: [1,Validators.required],
    name: ['',Validators.required],
    company_id: ['',Validators.required],
    skills: ['',Validators.required]
  });

  ngOnInit() {
  }
  onSubmit(){
    console.warn(this.candidateprofileForm.value);
    this.cs.saveData(this.candidateprofileForm.value);
  }

}
