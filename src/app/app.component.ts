import { Component, LOCALE_ID, Inject } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'interviewApp';
  isLoggedIn = false;
  userName;
  languageList = [
      { code: 'en', label: 'English' },
      { code: 'hi', label: 'हिंदी' },
      { code: 'es', label: 'Espanol' }
    ];

  constructor(private route: ActivatedRoute,
              private router: Router,
              @Inject(LOCALE_ID) protected localeId: string) {

  }
  ngOnInit(){

    if(localStorage.getItem('userName')){
      this.userName = localStorage.getItem('userName');
      this.isLoggedIn = true;
    }else {
      this.userName = 'Guest';
    }
  }

  ngDoCheck() {
    if(localStorage.getItem('userName')){
      this.userName = localStorage.getItem('userName');
      this.isLoggedIn = true;
    }else {
      this.userName = 'Guest';
    }
  }

  logout() {
    localStorage.removeItem('userName');
    this.isLoggedIn = false;
    this.router.navigate(['/login']);

  }
}
