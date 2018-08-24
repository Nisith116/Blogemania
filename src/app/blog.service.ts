import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  public currentBlog;
  
  public allBlogs = [
    {
      "blogId":"1",
      "lastModified": "2017-10-20T12:20:47.854Z",
      "created": "2017-10-20T12:20:47.854Z",
      "tags": ["humour","comedy","standUp"],
      "author": "Admin",
      "category": "Comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "this is blog body",
      "description": "this is blog1 description",
      "title": "this is blog1"
      
    },
    {
      "blogId":"2",
      "lastModified": "2017-10-21T21:20:47.854Z",
      "created": "2017-10-21T21:20:47.854Z",
      "tags": [],
      "author": "Admin",
      "category": "Comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "<h1>this is big text</h1><p>small text</p>",
      "description": "this is description of the example blog",
      "title": "this is blog2"
      
    },
    {
      "blogId":"3",
      "lastModified": "2017-10-20T12:20:47.854Z",
      "created": "2017-10-20T12:20:47.854Z",
      "tags": [],
      "author": "Admin",
      "category": "Comedy",
      "isPublished": true,
      "views": 0,
      "bodyHtml": "this is blog body",
      "description": "this is blog3 description",
      "title": "this is blog3"
      
    }
  ]

  constructor() { }

  
}
