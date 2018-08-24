import { Component, OnInit } from '@angular/core';
import { BlogApiService } from '../blog-api.service';
import { ActivatedRoute, Router} from '@angular/router';





@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {
  public blogTitle:string
  public blogDescription:string
  public blogBodyHtml:string
  public blogCategory:string
  public possibleCategories = ["Comedy","Drama","Action","Technology"]
  constructor(public blogApiService:BlogApiService, private _route:Router,private activatedRoute:ActivatedRoute ) {
    
  }
  private Variable;
  ngOnInit() {


  }

  
  

  public createBlog():any {
     
      
      let blogData = {
      title: this.blogTitle,
      description: this.blogDescription,
      blogBody: this.blogBodyHtml,
      category:this.blogCategory
    }
    console.log(blogData);

    
  
    this.blogApiService.getCreateBlog(blogData).subscribe(
      data=>{
        console.log("Blog created");
        alert("Blog Created successfully");
        console.log(data);
        setTimeout(()=>{
          this._route.navigate(['/blog',data.data.blogId])
        },1000)
        
        
        
      },
      error=>{
        console.log(error.errorMessage);
        alert("some error occured")
        
      }
    )
  }
  
  

}
