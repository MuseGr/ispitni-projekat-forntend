import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public auth: AuthService) { }

  public user: User
  createPostDropdown: boolean = false;

  public postDraft: Post

  ngOnInit(): void {
    this.auth.GetUserInfo().subscribe(res =>{
      this.user = res
    })
    this.postDraft = new Post()
  }

  public showHideDropDown(){
    if(this.createPostDropdown){
      this.createPostDropdown = false
    }else
      this.createPostDropdown = true;
  }
  public CreatePost(){
    console.log(this.postDraft)
    this.auth.CreateNewPost(this.postDraft).subscribe(res => {
      this.auth.GetPosts().subscribe()
      this.postDraft = new Post()
      this.showHideDropDown()
    })
  }
}
