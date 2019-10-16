import { Injectable } from '@angular/core';
import { CANDIDATE } from './../shared/mock-candidate';
@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  constructor() { }
  candidates = CANDIDATE;

  getAllCandidates() {
    return this.candidates;
  }
  saveData(data){
    return this.candidates.push(data);
  }
}
