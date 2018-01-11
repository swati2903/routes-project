import { Component, OnInit } from '@angular/core';
import { Params, Router, ActivatedRoute, Route } from '@angular/router';
import { Http, Response } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  private userId: number;
  private id: number;
  private title: string;
  albums: any[];
  
  constructor(private http: Http, private router: Router, private route: ActivatedRoute) {
    }
  getAlbum() {
    this.http.get(`https://jsonplaceholder.typicode.com/albums`)
    .subscribe((res: Response) => this.albums = res.json());
   }

  ngOnInit() {
    this.getAlbum();
  };



  }


