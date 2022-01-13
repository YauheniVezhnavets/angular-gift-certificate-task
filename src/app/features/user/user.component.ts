import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../../shared/service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public users: User[]=[]
  public user: User|undefined;

constructor(private userService:UserService) { }
 

ngOnInit(): void {

    this.getUsers();
    
  }

public getUsers():void{
  this.userService.getUsers().subscribe(
    (response:User[])=>{
      this.users = response;
      console.log(this.users);
    },
    (error:HttpErrorResponse)=>{
      alert(error.message);      
    }
  );
 }
}
