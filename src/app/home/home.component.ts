import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { BlogApiService } from '../blog-api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  
  public allBlogs;
  

  

constructor(public blogApiService:BlogApiService) { 

}

ngOnInit() {

  this.allBlogs = this.blogApiService.getAllBlogs().subscribe(
    data =>{
      this.allBlogs = data['data'];

    },

    error=>{
      console.log(error.errorMessage);
      
    }
    

  )

}

  

  }

