import { Component, Input, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common'

import { Post } from 'src/app/models/post';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(public datepipe: DatePipe) { }

  @Input() post: Post
  public formatedDate

  ngOnInit(): void {
    this.formatedDate = this.datepipe.transform(this.post.dateCreated, 'hh:mm dd/MM/yyyy')
  }
}
