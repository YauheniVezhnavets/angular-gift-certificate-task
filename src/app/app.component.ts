import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Tag } from './features/model/tag';
import { TagService } from './shared/service/tag.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
 
public tags: Tag[]=[]
public tag: Tag|undefined;

constructor(private tagService:TagService) { }
 

ngOnInit(): void {
   
  }

public getTags():void{
  this.tagService.getTags().subscribe(
    (response:Tag[])=>{
      this.tags = response;
      console.log(this.tags);
    },
    (error:HttpErrorResponse)=>{
      alert(error.message);      
    }
  );
 }

 public getTag(tagId:number):void{
  this.tagService.getTag(tagId).subscribe(
    (response:Tag)=>{
      this.tag = response;
      console.log(this.tag);
    },
    (error:HttpErrorResponse)=>{
      alert(error.message);      
    }
  );
 }

}
