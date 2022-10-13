import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from '../models/login.model';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { session } from '../models/session.model'; 


@Injectable({
  providedIn: 'root'
})

export class LoginService {

  islogged:boolean;
  constructor(private http: HttpClient, private router: Router) {
    this.islogged = false;
  }

  postLogin(loginModule: LoginModel) {

    return this.http.post(`${environment.urlApiQuestionsSerpro}/login`, loginModule,{
      withCredentials: true 
    }).subscribe(
        
       (response) => {
        sessionStorage.setItem('userNameSession',response['userName'])
        sessionStorage.setItem('emailSession',response['email'])
        sessionStorage.setItem('imageSession',response['image'])
        console.log("Hi",response['userName'], "Welcome...");
        sessionStorage.setItem('jobUser',response['job'])
        
        environment.msgHeader = environment.msgGralApp + ' '+ sessionStorage.getItem('userNameSession');
        this.islogged = true;
        
          if (response['job'] == "OU=DOCENTES"){
            this.router.navigate(['addModule'])
          }
          else{
           location.reload();
           this.islogged = false;
          }
          
        }, 
        error => {
          if (error.error.message != null) {
            (error.error.message);
            console.log("login.service -> postLogin ",error.error.message);
          }
          else {
            (error.message,"Error de conexión.");
            console.log("login.service -> postLogin (posible desconexión de servicios de backend o ldap)",error);
          }
        }
      );
  }

  lastSession(req: string) : Observable<session[]> {
    return this.http.get <session[]> (`${environment.urlApiQuestionsSerpro}/GetSessionByid/${req}`,{withCredentials: true });
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