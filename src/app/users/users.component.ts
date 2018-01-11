import { Component, OnInit } from '@angular/core';
import { Params, Router, ActivatedRoute, Route } from '@angular/router';
import { Http, Response } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  private id:number;
  private name:string;
  private email:string;
  private address:any[];
  private street:string;
  private suite:string;
  private city:string;
  private zipcode:number;
  private geo:any[];
  private lat:number;
  private lng:number;
  private phone:number;
  private website:string;
  private company:any[];
  private catchPhrase:string;
  private bs:string;
  users:any[];

  constructor(private http: Http, private router: Router, private route: ActivatedRoute) { }
getUser(){
  this.http.get('https://jsonplaceholder.typicode.com/users')
  .subscribe((res: Response) => this.users = res.json());
}
  ngOnInit() {
    this.getUser();
  }

}
