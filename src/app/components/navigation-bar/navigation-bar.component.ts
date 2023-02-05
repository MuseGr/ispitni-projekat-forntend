import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  constructor(public auth: AuthService) { }

  public user: User

  ngOnInit(): void {
    this.auth.GetUserInfo().subscribe(res => {
      this.user = res
    })
  }
}
