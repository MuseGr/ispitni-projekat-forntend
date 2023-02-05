import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  @Input() page: string = ''
  public get postList(): Post[] {
    if(this.auth.filter == null)
      return null


    var sortedPosts = this.auth.filteredPosts.sort((a,b)=>{
      return b.id - a.id
    })

    return sortedPosts
  }

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
    if(this.page == 'profile'){
      console.log('get user posts')
      this.auth.GetPostsForUser().subscribe()
    }else if(this.page == 'home')
      this.auth.GetPosts().subscribe()
  }

}
