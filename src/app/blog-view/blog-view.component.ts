import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';
import { BlogService } from '../blog.service';
import { BlogApiService } from '../blog-api.service';

import { Location } from '@angular/common';


@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  providers: [Location]
})
export class BlogViewComponent implements OnInit {

  public Variable
  public currentBlog;
  blogApiService: any;
  

  constructor( private _route: ActivatedRoute, private router: Router, private blogapiService:BlogApiService,private location: Location) {
    console.log("constructor is called");
    
   }

   
   

  ngOnInit() {
    console.log("ngOnInitcalled");

    let myBlogId = this._route.snapshot.paramMap.get('blogId')
    console.log(myBlogId);
    this.blogapiService.getSingleBlogDetail(myBlogId).subscribe(
      data =>{
        this.currentBlog = data['data'];
  
      },
  
      error=>{
        console.log(error.errorMessage);
        
      }

    )

    
    
  }
  public deleteThisBlog() {
    this.blogapiService.deleteBlog(this.currentBlog.blogId).subscribe(
      data =>{
        alert("Deleted sucessfully")
        setTimeout(()=>{
          this.router.navigate(['/home']);
        },1000)
      }
      

    )
    
  }

  public goBack(){
    this.location.back()
  }
  

  }


