import { Component, OnInit } from '@angular/core';
import { Company } from './../shared/company';
// import { COMPANIES } from './../shared/mock-company';
import { CompanyService } from './company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.less']
})
export class CompanyComponent implements OnInit {

  constructor(public company: CompanyService ) { }

  companylist = [];

  isAddCompany = false;

  addCompany(){
    this.isAddCompany = true;
  }

  ngOnInit() {
    this.companylist = this.company.getAllCompanyData();
  }

}
