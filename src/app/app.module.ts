import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CommonModule }      from "@angular/common";
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { HelpComponent } from './help/help.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { PhotosComponent } from './photos/photos.component';
// import { FlexLayoutModule } from "@angular/flex-layout";
import { SidebarModule } from 'ng-sidebar';
import { Ng2PaginationModule } from 'ng2-pagination';
import { PanelModule } from 'primeng/primeng';
import { MatCardModule } from '@angular/material/card';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { ResponsiveModule } from 'ng2-responsive';
import { AlbumsComponent } from './albums/albums.component';
import { UsersComponent } from './users/users.component';
import { CommentsComponent } from './comments/comments.component';
import { TodosComponent } from './todos/todos.component';
import { PostsComponent } from './posts/posts.component';
import { WebStorageModule, LocalStorageService} from "angular2-localstorage";
import { LocalStorageModule } from 'angular-2-local-storage';
import { LoginComponent } from './login/login.component';
import { AppService } from './app.service';
const appRoutes: Routes = [
  //{path:'',redirectTo:'/login',pathMatch:"full"},
  { path: '',   component:LoginComponent},
  // { path:'login',component:LoginComponent},
  { path: 'home',    component:HomeComponent },
  { path: 'photos',  component:PhotosComponent },
  { path: 'about',   component:AboutComponent },
  { path: 'contact', component:ContactComponent },
  { path: 'services',component:ServicesComponent },
  { path: 'help',    component:HelpComponent },
  { path: 'albums',  component:AlbumsComponent},
  { path: 'comments',component:CommentsComponent},
  { path: 'todos',   component:TodosComponent},
  { path: 'posts',   component:PostsComponent},
  { path: 'users',   component:UsersComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ServicesComponent,
    HelpComponent,
    PhotosComponent,
    AlbumsComponent,
    UsersComponent,
    CommentsComponent,
    TodosComponent,
    PostsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    // FlexLayoutModule,
    HttpModule,
    HttpClientModule,
    SidebarModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    Ng2PaginationModule,
    PanelModule,
    MatCardModule,
    Angular2FontawesomeModule,
    ResponsiveModule,
    LocalStorageModule.withConfig({
      prefix: '',
      storageType: 'localStorage'
  })
    ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
  

