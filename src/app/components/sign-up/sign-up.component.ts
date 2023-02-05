import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterModel } from 'src/app/models/registerModel';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(public auth: AuthService, public router: Router) { }

  public model: RegisterModel
  public repeatPass: string

  ngOnInit(): void {
    this.model = new RegisterModel()
  }

  public Submit(){
    this.auth.Register(this.model).subscribe(res =>{
      this.auth.Login(this.model).subscribe(res => {
        this.auth.GetUserInfo().subscribe(res => {
          this.router.navigate(['home'])
        })
      })
    })
  }
}
