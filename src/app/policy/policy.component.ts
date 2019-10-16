import { Component, OnInit } from '@angular/core';
import { PolicyService} from './policy.service';
import { Policy } from '../shared/policy';

@Component({
  selector: 'app-policy',
  templateUrl: './policy.component.html',
  styleUrls: ['./policy.component.less']
})
export class PolicyComponent implements OnInit {

  constructor(private policyService: PolicyService) { }

  policies: Policy[];
  selectedPolicy: Policy  = { id :  null , number: null, amount:  null};

  ngOnInit() {
  this.readPolicies();
  }

  readPolicies(){
  this.policyService.readPolicies().subscribe((policies: Policy[]) => {
    this.policies = policies;
    console.log(this.policies);
  });
}


createOrUpdatePolicy(form) {
if (this.selectedPolicy && this.selectedPolicy.id) {
    form.value.id = this.selectedPolicy.id;
    this.policyService.updatePolicy(form.value).subscribe((policy: Policy) => {
      this.readPolicies();
      console.log('Policy updated, ' , policy);
    });
} else {
  this.policyService.createPolicy(form.value).subscribe((policy: Policy) => {
  this.readPolicies();
  console.log('Policy created, ', policy);
});

}

}

selectPolicy(policy: Policy){
this.selectedPolicy = policy;
}

deletePolicy(id){
  this.policyService.deletePolicy(id).subscribe((policy: Policy) => {
    console.log('Policy deleted,', policy);
  });
  this.readPolicies();
}


}
