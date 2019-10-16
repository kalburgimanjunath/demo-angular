import { Injectable } from '@angular/core';
import { COMPANIES } from './../shared/mock-company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor() { }

  company = COMPANIES;

  getAllCompanyData(){
    return this.company;
  }
  saveCompanyData(data){
    this.company.push(data);
  }

}
