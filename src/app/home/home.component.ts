import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { Router, ActivatedRoute, Route } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  photos: any[];
  
  constructor(private http: Http, private router: Router, private route: ActivatedRoute) {
    this.getTitle();
    
  }
  getTitle() {
    this.http.get(`https://jsonplaceholder.typicode.com/photos`)
    .subscribe((res: Response) => this.photos = res.json());
    
    
  }

  navigateToDetail(photo:any) {
    this.router.navigate(['photos'], {queryParams:{ id:photo.id,title:photo.title,thumbnailUrl:photo.thumbnailUrl,description:"This is a colored box"}});
    console.log("photo details")
  }
  
}