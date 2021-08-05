import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IcfesTest } from '../../models/test.model';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IcfesTestService {

  selectedTest: IcfesTest;
  icfesTests: IcfesTest[];


  constructor(private http: HttpClient) {
    this.selectedTest = new IcfesTest();
   }

  getIcfesTest(){
    return this.http.get(`${environment.urlApiQuestionsSerpro}/icfesTest`,  {withCredentials: true});
  }

  posIcfesModule(icfesTests: IcfesTest)  {
    return this.http.post(`${environment.urlApiQuestionsSerpro}/icfesTest`, icfesTests,  {withCredentials: true}).subscribe(
      (response) =>{
        console.log (response);
      },
      error => {
        console.log (error);
      }
    );
  }
}
