import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Tag } from '../../features/model/tag';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  private apiServerUrl = 'http://localhost:8080/GiftCertificateSystem-1.0/api/v1/tags'; 

  constructor(private http:HttpClient) { }


  public getTags(): Observable<Tag[]>{

    return this.http.get(this.apiServerUrl+'?page=0').pipe(map((data:any)=>{

      let tagList = data["_embedded"]["tagDtoList"];

      return tagList.map(function(tag: any): Tag {

          return new Tag( tag.name, tag.pathToPicture);
        
        });
  }));
  }


  public getTag(tagId:number): Observable<Tag>{

      return this.http.get<Tag>(this.apiServerUrl+'/'+tagId);   
      
    }

}
