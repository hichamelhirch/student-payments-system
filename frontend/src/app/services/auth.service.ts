import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

public users:any={
  admin : {password :'1234',roles :['STUDENT','ADMIN']},
  user1 : {password :'1234',roles :['STUDENT']}
}
public userame:any;
public isAuthenticated :boolean=false;
public roles :string[]=[];
  constructor(private router:Router) { }

  public login(username:string,password:string):boolean{
  if (this.users[username] && this.users[username]['password']==password){
     this.userame=username;
     this.isAuthenticated=true;
     this.roles=this.users['roles'];
    return true;
  }
  else {
    return false;
  }
  }

  logout() {
    this.isAuthenticated=false;
    this.roles=[];
    this.userame=undefined;
    this.router.navigateByUrl('/login')

  }
}
