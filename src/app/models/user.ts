import { Post } from "./post"

export class User{
  public id : string
  public firstName : string
  public lastName : string
  public email : string
  public displayName : string
  public isActive : boolean
  public dateCreated : Date
  public profileImageUrl: string
  public postsList: Post[]
}
