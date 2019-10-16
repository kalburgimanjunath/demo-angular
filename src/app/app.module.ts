import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithComponentFactories } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { QuestionsComponent } from './questions/questions.component';
import { CompanyComponent } from './company/company.component';
import { CandidateComponent } from './candidate/candidate.component';
import { RolesComponent } from './roles/roles.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddCompanyComponent } from './company/add-company/add-company.component';
import { AddCandidateComponent } from './candidate/add-candidate/add-candidate.component';
import { AddQuestionsComponent } from './questions/add-questions/add-questions.component';
import { AddrolesComponent } from './roles/addroles/addroles.component';
import { PolicyComponent } from './policy/policy.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    QuestionsComponent,
    CompanyComponent,
    CandidateComponent,
    RolesComponent,
    AddCompanyComponent,
    AddCandidateComponent,
    AddQuestionsComponent,
    AddrolesComponent,
    PolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
