import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Route } from '@angular/router';
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AppService]
})
export class LoginComponent implements OnInit {

  private username: string;
  private password: string;
  private log_username:string;
  private log_password:string;
  private new_value:any;

  constructor(private http: Http,private router: Router,private appService:AppService) { 
    this.getLogin();
  }

  ngOnInit() {
    console.log("inside ngOnInit");
    this.getLogin();
    this.username="";
    this.password="";
    this.log_username="John";
    this.log_password="abcd1";
  
  }
  getLogin(){
    this.appService.getValue()
      .subscribe(res=>{
        console.log("the response is",res.json());
        this.new_value=res.json();
        console.log("the nev value",this.new_value);
      });
   }
  login(){
    console.log("username is ",this.username);
    console.log("password is",this.password);
    if(this.username===this.log_username){
      if(this.password===this.log_password){
        console.log("login success");
        
        
        this.router.navigate(['home']);
      }else{
        this.username="";
        this.password="";
      } 
    }else{
      this.username="";
      this.password="";
    }
  }
}

