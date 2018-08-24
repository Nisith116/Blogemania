import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';
import { BlogApiService } from '../blog-api.service';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {
  blogApiService: any;

  public blogTitle:string
  public blogDescription:string
  public blogBodyHtml:string
  public blogCategory:string

  constructor( private _route: ActivatedRoute, private router: Router, private blogapiService:BlogApiService) {
    console.log("constructor is called");
    
   }
   public possibleCategories = ["Comedy","Drama","Action","Technology"]

   public currentBlog;
   ngOnInit() {
    console.log("ngOnInitcalled");

    let myBlogId = this._route.snapshot.paramMap.get('blogId')
    console.log(myBlogId);
    this.blogapiService.getSingleBlogDetail(myBlogId).subscribe(
      data =>{
        this.currentBlog = data['data'];
        console.log(this.currentBlog);
        
  
      },
  
      error=>{
        console.log(error.errorMessage);
        
      }

    )
  }
 
  
  public editTheBlog():any{
    console.log(this.currentBlog.blogId);
    console.log(this.currentBlog);

    let blogData = {
      title: this.currentBlog.title,
      description: this.currentBlog.description,
      blogBody: this.currentBlog.bodyHtml,
      category:this.currentBlog.category
    }
    
      this.blogapiService.deleteBlog(this.currentBlog.blogId).subscribe(
        data =>{
          console.log("deleted");
          
          
        }
  
      )
    

    
    this.blogapiService.getCreateBlog(blogData).subscribe(
      data=>{
        alert("Blog edited sucessfully")
        console.log(data);
        
        setTimeout(()=>{
          this.router.navigate(['/blog',data.data.blogId]);
        },1000)

      }

    )
  }


}
