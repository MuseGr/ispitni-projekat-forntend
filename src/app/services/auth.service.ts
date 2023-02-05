import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { JwtToken } from '../models/jwtToken';
import { LoginModel } from '../models/loginModel'
import { Post } from '../models/post';
import { RegisterModel } from '../models/registerModel';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public token: JwtToken
  public user: User
  public allPosts: Post[]
  public filter: string = ''
  public get filteredPosts(){
    if(this.allPosts == null)
      return null
    return this.allPosts.filter(p => p.title.includes(this.filter))
  }

  constructor(public httpClient: HttpClient, public router: Router) {


  }
  public Register(registerModel: RegisterModel) : Observable<boolean>{
    return this.httpClient.post<boolean>("https://localhost:7191/register", registerModel).pipe(
      map(res => {
        return res
      })
    )
  }
  public Login(loginModel: LoginModel) : Observable<JwtToken>{
    return this.httpClient.post<JwtToken>("https://localhost:7191/login", loginModel).pipe(
      map(res => {
        this.token = res
        localStorage.setItem("id_token", res.token)
        return this.token
      })
    )
  }
  public GetUserInfo() : Observable<User>{
    return this.httpClient.get<User>("https://localhost:7191/get-user-info").pipe(
      map(res => {
        this.user = res
        return res
      })
    )
  }
  public Proba() : Observable<any>{
    return this.httpClient.get<any>("https://localhost:7191/proba").pipe(
      map(res => {
        return res
      })
    )
  }
  public get IsLoggedIn(){
    return this.user != null
  }
  public LogOut(){
    localStorage.removeItem('id_token')
    this.user = null
    this.router.navigate(['login'])
  }
  public checkForTokenInLocalStorage(){
    var storageToeken = localStorage.getItem('id_token')
    if(storageToeken != null){
      this.GetUserInfo().subscribe()
    }
  }
  public SaveUserChanges(user: User) : Observable<any>{
    return this.httpClient.post<any>("https://localhost:7191/change-user-info", user).pipe(
      map(res => {
        return res
      })
    )
  }
  public CreateNewPost(post: Post) : Observable<any>{
    return this.httpClient.post<any>("https://localhost:7191/create-post", post).pipe(
      map(res => {
        this.GetPosts()
        return res
      })
    )
  }
  public GetPosts() : Observable<any>{
    return this.httpClient.get<any>("https://localhost:7191/get-posts").pipe(
      map(res => {
        this.allPosts = res
        return res
      })
    )
  }
  public GetPostsForUser(): Observable<any>{
    return this.httpClient.get<any>("https://localhost:7191/get-posts-for-user").pipe(
      map(res => {
        this.allPosts = res
        return res
      })
    )
  }
}
