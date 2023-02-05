import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/models/loginModel';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(public auth: AuthService, public router: Router) { }

  public model: LoginModel

  ngOnInit(): void {
    this.model = new LoginModel()
  }

  public Submit(){
    //autentifikuj usera
    this.auth.Login(this.model).subscribe(res => {
      this.auth.GetUserInfo().subscribe(res => {
        this.router.navigate(['home'])
      })

    })
  }
  // public LogOut(){
  //   this.auth.LogOut()
  // }
  // public Proba(){
  //   this.auth.Proba().subscribe()
  // }
}
