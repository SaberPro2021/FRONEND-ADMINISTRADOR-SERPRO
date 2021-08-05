import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from '../models/login.model';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http: HttpClient, private router: Router) {

  }

  postLogin(loginModule: LoginModel) {

    return this.http.post(`${environment.urlApiQuestionsSerpro}/login`, loginModule,{
      withCredentials: true 
    }).subscribe(
       response => {
          sessionStorage.setItem('userNameSession',response['userName'])
          sessionStorage.setItem('emailSession',response['email'])
          sessionStorage.setItem('jobUser',response['job'])
          if (response['job'] == "OU=DOCENTES"){
            console.log("Hi",response['userName'], "Welcome...");
            this.router.navigate(['addModule'])
          }
          else{
           location.reload();
          }
          
       
        }, 
        error => {
          console.log("Error del front --> ",error);
        }
      );
  }

  postLogout() {
    return this.http.get(`${environment.urlApiQuestionsSerpro}/logout`,{withCredentials: true })
    .subscribe(
      (response) => {
        sessionStorage.clear;
        this.router.navigate(['login'])
      }, 
      error => {
        console.log("Error Logout",error)
      }
    );
  }

}