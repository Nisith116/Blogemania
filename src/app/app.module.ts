import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';


import { BlogService } from './blog.service';
import { BlogApiService } from './blog-api.service';
import { HttpClient, HttpClientModule } from '../../node_modules/@angular/common/http';
import {FormsModule , ReactiveFormsModule} from "@angular/forms"



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogViewComponent,
    BlogCreateComponent,
    BlogEditComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,  
    ReactiveFormsModule,
    BrowserModule, 
    BsDropdownModule.forRoot(),
    RouterModule.forRoot([
      {path: 'home', component:HomeComponent},
      {path: '', redirectTo: 'home', pathMatch:'full'},
      {path: 'about', component:AboutComponent},
      {path: 'blog/:blogId', component:BlogViewComponent},
      {path: 'create', component:BlogCreateComponent},
      {path: 'edit/:blogId', component:BlogEditComponent},
      {path: '**', component:NotFoundComponent}


      

    ])
  ],
  exports: [BsDropdownModule],
  providers: [BlogService,BlogApiService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
