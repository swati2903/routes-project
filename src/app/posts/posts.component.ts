import { Component, OnInit } from '@angular/core';
import { Params, Router, ActivatedRoute, Route } from '@angular/router';
import { Http, Response } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  private userId:number;
  private id:number;
  private title:string;
  private body:string;
  private count:boolean;
  //private showLike:Boolean;
  posts:any[];

  constructor(private http: Http, private router: Router, private route: ActivatedRoute,private localStorageService: LocalStorageService) { }
  getPost(){
    this.http.get('https://jsonplaceholder.typicode.com/posts')
    .subscribe((res: Response) => this.setLikeVar(res));
    
  }

  ngOnInit() {
    this.getPost();
    //this.localStorageService.clearAll();
  };
  setLikeVar(res){
    this.posts=res.json();
    this.posts.forEach((post)=>{
      var like='like'+post.id;
      if(this.localStorageService.get(like)===null){
      (<any>post).showLike=true;
      }else if(this.localStorageService.get(like)===1){
        (<any>post).showLike=false;
      }
    })
  }
  like_count(post){
    var like='like'+post.id;
    if(post.showLike===true){
      this.localStorageService.set(like,1);
      post.showLike=false;
      console.log("post liked");
  }
  else{
    this.localStorageService.remove(like);
    post.showLike=true;
    console.log("post changed to like ");
    }
  }
  }
