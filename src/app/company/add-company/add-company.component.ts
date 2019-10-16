import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder  } from '@angular/forms';
import { CompanyComponent } from '../company.component';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.less']
})
export class AddCompanyComponent implements OnInit {

  constructor(private fb: FormBuilder,private companyService:CompanyService) { }

  companyprofileForm = this.fb.group({
    id: [1,Validators.required],
    name: ['',Validators.required],
    skills: ['',Validators.required],
    jobdescription: ['',Validators.required],
    createddate: ['',Validators.required]
  });

  ngOnInit() {
  }
  onSubmit(){
    console.warn(this.companyprofileForm.value);
    this.companyService.saveCompanyData(this.companyprofileForm.value);
  }



}
