import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder,private router: Router) { }

  loginForm = this.fb.group({
    userName: new FormControl(''),
    userPassword: new FormControl('')
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.loginForm.value);
    let data = this.loginForm.value;
    localStorage.setItem('userName',data.userName);
    console.log("Username: "+ localStorage.getItem('userName'));
    this.router.navigate(['/home']);

  }

  ngOnInit() {


  }

}
