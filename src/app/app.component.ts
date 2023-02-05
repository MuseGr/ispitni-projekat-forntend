import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {
  logedIn: boolean = false;

  constructor(public auth: AuthService){}

  public ngOnInit(): void {
    this.auth.checkForTokenInLocalStorage()
  }

  title = 'forum-project';
}
