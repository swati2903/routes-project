import { Component ,OnInit} from '@angular/core';
import { SidebarModule } from 'ng-sidebar';
import { CommonModule } from "@angular/common";
import { Router, ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  constructor(private routing:Router){}
  ngOnInit(){
    console.log("routing.url",this.routing.url);
  }
  private _opened: boolean = false;
  private _mode: string='push';
   private _toggleSidebar() {
     this._opened = !this._opened;
   }
  }
