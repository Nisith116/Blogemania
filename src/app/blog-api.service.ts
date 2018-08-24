import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/do'
import { observable } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogApiService {
  public allBlogs;
  public currentBlog;

  public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs'

  public token = 'MjA4MDU3N2Q2NzVlMWE4OTAwNzI0MTk4ZTEwZWJjOWNiYjZhNjViMzY5MThkMGM3NWI5Y2U3NDg1YTkwZjlmZjc2MjZiMTJjZWZiZDNkN2QzOTljZjBiOGRlM2JlZWZiZDVjYmFkMGQ4ZTQ1YWQwMDQzMjc0NWY2NzNkZDBjNWQ2MA==';

  constructor( public _http: HttpClient) { 

  }
  public blogiD;
  private HandleError(err:HttpErrorResponse):any {
    console.log(err.message);
    return Observable.throw(err.message);
    
  }

  public getAllBlogs():any {

    let myResponse = this._http.get(this.baseUrl + '/all?authToken=MjA4MDU3N2Q2NzVlMWE4OTAwNzI0MTk4ZTEwZWJjOWNiYjZhNjViMzY5MThkMGM3NWI5Y2U3NDg1YTkwZjlmZjc2MjZiMTJjZWZiZDNkN2QzOTljZjBiOGRlM2JlZWZiZDVjYmFkMGQ4ZTQ1YWQwMDQzMjc0NWY2NzNkZDBjNWQ2MA==')
    console.log(myResponse);
    return myResponse;
    
  }

  public getSingleBlogDetail(currentBlogId):any{
    let response = this._http.get(this.baseUrl + '/view/' + currentBlogId + '?authToken=MjA4MDU3N2Q2NzVlMWE4OTAwNzI0MTk4ZTEwZWJjOWNiYjZhNjViMzY5MThkMGM3NWI5Y2U3NDg1YTkwZjlmZjc2MjZiMTJjZWZiZDNkN2QzOTljZjBiOGRlM2JlZWZiZDVjYmFkMGQ4ZTQ1YWQwMDQzMjc0NWY2NzNkZDBjNWQ2MA==')
    console.log(response);
    return response;
    
    
}
public getCreateBlog(blogData):any{
  let BlogResponse = this._http.post(this.baseUrl + '/create?authToken=' + this.token, blogData)
  console.log(BlogResponse);
  
  return BlogResponse;
}

public getEditBlog(blogId,blogData):any{
  console.log(blogData);
  
  let BlogEditResponse = this._http.post(this.baseUrl + '/' +  blogId + '/edit?authToken=' + this.token, blogData)
  console.log(BlogEditResponse);
  
  return BlogEditResponse;
}

public deleteBlog(blogId):any{
  let data = {}
  let BlogDeleteResponse = this._http.post(this.baseUrl + "/" + blogId + '/delete?authToken=' + this.token,data)
  return BlogDeleteResponse;
}
  

}
