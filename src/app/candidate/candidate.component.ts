import { Component, OnInit } from '@angular/core';
import { Candidate } from './../shared/candidate';
import { CandidateService } from './candidate.service';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.less']
})
export class CandidateComponent implements OnInit {

  constructor(private candidates: CandidateService) { }
  allcandidates = [];
  isAddCandidate = false;

  ngOnInit() {
    this.allcandidates = this.candidates.getAllCandidates();
  }
  addCandidate(){
    this.isAddCandidate = true;
  }

}
