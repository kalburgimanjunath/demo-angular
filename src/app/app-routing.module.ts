import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { QuestionsComponent } from './questions/questions.component';
import { CompanyComponent } from './company/company.component';
import { CandidateComponent } from './candidate/candidate.component';
import { RolesComponent } from './roles/roles.component';
import { FormsModule } from '@angular/forms';
import { AddCompanyComponent } from './company/add-company/add-company.component';
import { AddQuestionsComponent } from './questions/add-questions/add-questions.component';
import { PolicyComponent } from './policy/policy.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home',component: HomeComponent},
  { path: 'add-questions',component: AddQuestionsComponent},
  { path: 'list-questions',component: QuestionsComponent},
  { path: 'company',component: CompanyComponent},
  { path: 'candidate',component: CandidateComponent},
  { path: 'roles',component: RolesComponent},
  { path: 'add-company',component: AddCompanyComponent},
  { path: 'list-company',component: CompanyComponent},
  { path: 'policy', component: PolicyComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule, FormsModule]

})
export class AppRoutingModule { }
