import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Question } from 'src/app/models/question.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class IcfestQuestionService {

  constructor(private httpClient: HttpClient) { }

  createQuestion (question: Question) {
    console.log ("Question",question); 
    return this.httpClient.post(`${environment.urlApiQuestionsSerpro}/question`, question).subscribe(
      (response) =>{
        console.log (response);
      },
      error => {
        console.log (error);
      }
    );
  }

  getQuestions(){
    return this.httpClient.get(`${environment.urlApiQuestionsSerpro}/question`);
  }
}
