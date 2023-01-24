import { Component, OnInit } from '@angular/core';
import {DropdownModule} from 'primeng/dropdown';
import { typeQuestion } from 'src/app/models/typeQuestion.model';

@Component({
  selector: 'app-question-creation',
  templateUrl: './question-creation.component.html',
  styleUrls: ['./question-creation.component.css']
})


export class QuestionCreationComponent implements OnInit {

  question: typeQuestion[];
  selectedTypeQuestion: typeQuestion;
  selectedType: String;

  constructor() {
    this.question = [
      {name: 'Selección Multiple', code: 'SM'},
      {name: 'Falso - Verdadero', code: 'FV'}
  ];
  }

  ngOnInit(): void {

  }

  onClick(e){
    this.selectedType = this.selectedTypeQuestion.code;
  };


}
