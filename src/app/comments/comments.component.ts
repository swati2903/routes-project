import { Component, OnInit } from '@angular/core';
import { Params, Router, ActivatedRoute, Route } from '@angular/router';
import { Http, Response } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { LocalStorage, SessionStorage} from "angular2-localstorage/WebStorage";
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  private postId:number;
  private id:number;
  private name:string;
  private email:string;
  private body:string;
  comments:any[];
  

  constructor(private http: Http, private router: Router, private route: ActivatedRoute,private localStorageService: LocalStorageService) {
  }
  

  ngOnInit() {
    //this.localStorageService.clearAll();
    this.getComment();
  };
  getComment(){
    console.log("in getComment");
    this.http.get('https://jsonplaceholder.typicode.com/comments')
    .subscribe((res:Response) =>{
      console.log("in getComment inside");
      this.setLike(res); 
    });
  }
setLike(res){
  console.log("in set;Like function");
  this.comments=res.json();
  this.comments.forEach((comment)=>{
    var like='like'+comment.id;
    if(this.localStorageService.get(like)===null){
      (<any>comment).Like=true;
      }else if(this.localStorageService.get(like)!==null){
        (<any>comment).Like=false;
        (<any>comment).like=this.localStorageService.get(like);
      }
      var dislike='dislike'+comment.id;
      if(this.localStorageService.get(dislike)===null){
        (<any>comment).DisLike=true;
        }else if(this.localStorageService.get(dislike)!==null){
          (<any>comment).DisLike=false;
          (<any>comment).dislike=this.localStorageService.get(dislike);
        }
  });
  console.log("the comments",this.comments);
}

    like(comment){
    var like='like'+comment.id;
    if(this.localStorageService.get(like)===null){
      this.localStorageService.set(like,1);
      comment.like=this.localStorageService.get(like);
      console.log("like value set to  1");
    }else{
      var num=this.localStorageService.get(like);
      var new_value = Number(num)+1;
      this.localStorageService.set(like,new_value);
      comment.like=this.localStorageService.get(like);
      console.log("like value is incremented by one ",this.localStorageService.get(like));
    }
   
  }
dislike(comment){
  var dislike='dislike'+comment.id;
  if(this.localStorageService.get(dislike)===null){
    this.localStorageService.set(dislike,1);
    comment.dislike=this.localStorageService.get(dislike);
    console.log("dislike value set to  1");
  }else{
    var num=this.localStorageService.get(dislike);
    var new_value = Number(num)+1;
    this.localStorageService.set(dislike,new_value);
    comment.dislike=this.localStorageService.get(dislike);
    console.log("dislike value is incremented by one",this.localStorageService.get(dislike));
  }
}
}
