import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public home:Boolean;
  public about:Boolean; 
  public contact:Boolean;
  public services:Boolean;
  public help:Boolean;

  ngOnInit() {

      this.home=false;
      this.about=false;
      this.contact=false;
      this.services=false;
      this.help=false;
  }
     callHome(){
       console.log("in home");
      this.home=true;
      this.about=false;
      this.contact=false;
      this.services=false;
      this.help=false;
     }
     callAbout(){
       console.log("in about");
      this.about=true;
      this.home=false;
      this.contact=false;
      this.services=false;
      this.help=false;
    }
    callContact(){
      console.log("in contact");
      this.contact=true;
      this.home=false;
      this.about=false;
      this.services=false;
      this.help=false;
    }
    callServices(){
      console.log("in services");
      this.services=true;
      this.home=false;
      this.about=false;
      this.contact=false;
      this.help=false;
  }
  callHelp(){
    console.log("in help");
    this.help=true;
    this.home=false;
    this.about=false;
    this.contact=false;
    this.services=false;
  }
  }
  
  


