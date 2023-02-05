import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'edit-proflie',
  templateUrl: './edit-proflie.component.html',
  styleUrls: ['./edit-proflie.component.css']
})
export class EditProflieComponent implements OnInit {

  constructor(public auth: AuthService) { }

  public user: User
  public infoColapsed: boolean = true

  ngOnInit(): void {
    this.auth.GetUserInfo().subscribe(res => {
      this.user = res
    })
  }
  public expandEditProfile(){
    if(this.infoColapsed){
      this.infoColapsed = false
    }else{
      this.infoColapsed = true
    }
    console.log(this.infoColapsed)
  }

  public SaveChanges(){
    this.auth.SaveUserChanges(this.user).subscribe()
  }

}
