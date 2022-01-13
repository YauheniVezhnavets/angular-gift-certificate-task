import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from '../../features/model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiServerUrl = 'http://localhost:8080/GiftCertificateSystem-1.0/api/v1/users'; 

  constructor(private http:HttpClient) { }


  public getUsers(): Observable<User[]>{

    return this.http.get(this.apiServerUrl+'?page=0').pipe(map((data:any)=>{

      let tagList = data["_embedded"]["userDtoList"];

      return tagList.map(function(user: any): User {

          return new User(user.userId, user.firstName,user.lastName, user.email, user.address);
        
        });
  }));
  }


//   public getTag(tagId:number): Observable<Tag>{

//       return this.http.get<Tag>(this.apiServerUrl+'/'+tagId);   
      
//     }

}