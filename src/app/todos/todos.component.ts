import { Component, OnInit } from '@angular/core';
import { Params, Router, ActivatedRoute, Route } from '@angular/router';
import { Http, Response } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  private userId:number;
  private id:number;
  private title:string;
  private completed:string;
  todos:any[];

  constructor(private http: Http, private router: Router, private route: ActivatedRoute) {}
getTodo(){
  this.http.get('https://jsonplaceholder.typicode.com/todos')
  .subscribe((res: Response) => this.todos = res.json());
}
  ngOnInit() {
    this.getTodo();
  };

}
