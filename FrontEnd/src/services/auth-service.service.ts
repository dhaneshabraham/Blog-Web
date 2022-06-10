import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  authUser(user:any){
    let userArray=[];
    // if(localStorage.getItem('password')){
      userArray = JSON.parse(localStorage.getItem('password') || '{}');
    // alert('item found')
      // console.log(userArray);
    //}
   
     
      return {username:'Admin',password:'1234'};
    // return userArray.find(p =>{p.userName===user.username&&p.password===user.password});
  }
}
