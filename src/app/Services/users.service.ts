import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iusers } from '../model/iusers';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseURL : string = "http://localhost:4000/users";
  token :boolean = false;
  constructor(private http : HttpClient) { }

  Login(username:string , password:string)
  {
    this.http.get<Iusers>(`${this.baseURL}/?username=${username}&password=${password}`).subscribe((data)=>{
      if(data) this.token = true;
    })
  }

  Logout(){
    this.token = false;
  }

  isLogged(){
    return this.token;
  }
}
