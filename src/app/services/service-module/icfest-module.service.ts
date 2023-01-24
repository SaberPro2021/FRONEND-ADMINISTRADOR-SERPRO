import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IcfesModule } from '../../models/module.model';
import { environment } from '../../../environments/environment';
import { TagContentType } from '@angular/compiler';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IcfestModuleService {

  constructor(private http: HttpClient) {

  }

  httpOptions = {
    headers: new HttpHeaders({
     "Content-Type": "multipart/form-data",
     'Authorization': "true"
    })
  };

  getIcfesModule(){
    return this.http.get(`${environment.urlApiQuestionsSerpro}/module`,  {withCredentials: true});
  }

  posIcfesModule(icfesModule:IcfesModule)  {
    console.info("Esta es la URI");
    console.log(`${environment.urlApiQuestionsSerpro}/module`)

    console.log(icfesModule);

    return this.http.post(`${environment.urlApiQuestionsSerpro}/module`, icfesModule, {withCredentials: true}).subscribe(

      (response) =>{
        console.log (response);
      },
      error => {
        console.log (error);
      }
    );
  }

}
