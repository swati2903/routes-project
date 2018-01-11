import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  private title: string;
  private id: number;
  private thumbnailUrl:string;
  private description:string;


  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      console.log(params);
    });

    this.route.queryParams.subscribe(params => {
      console.log(params);
    });
   }

  ngOnInit() {this.route.queryParams.forEach((params: Params) => {
    this.id = params['id'];
    this.title = params['title'];
    this.thumbnailUrl=params['thumbnailUrl'];
    this.description=params['description'];
    

});

console.log(this.route.snapshot.queryParams['id'])
console.log(this.route.snapshot.queryParams['title'])
console.log(this.route.snapshot.queryParams['thumbnailUrl'])
console.log(this.route.snapshot.queryParams['description'])


  }

}
