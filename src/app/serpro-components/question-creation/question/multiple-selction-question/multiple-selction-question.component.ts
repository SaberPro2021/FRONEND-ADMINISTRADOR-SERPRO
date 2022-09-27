import { Component, OnInit } from '@angular/core';
import { Answer } from 'src/app/models/answer.model';
import { Question } from 'src/app/models/question.model';
import { IcfestQuestionService } from 'src/app/services/service-question/icfest-question.service';
import { environment } from 'src/environments/environment';
import { SelectItem } from 'primeng/api';
import { IcfestModuleService } from '../../../../services/service-module/icfest-module.service';



@Component({
  selector: 'app-multiple-selction-question',
  templateUrl: './multiple-selction-question.component.html',
  styleUrls: ['./multiple-selction-question.component.css']
})
export class MultipleSelctionQuestionComponent implements OnInit {

  question: Question;
  defaultAnsewersQty: number = 4;
  formsCorrect : boolean = true;
  items: SelectItem[];
  item: string;
  display: boolean = false;
  public imagePath;
  imgURL: any;
  public message: string;

  constructor(
    private icfestModuleService : IcfestModuleService,
    private icfestQuestionService: IcfestQuestionService
    ) {
    this.question = new Question ();
    this.question.questionType = environment.multipleSelectionQuestionType;

    for (let cont=0; cont< this.defaultAnsewersQty; cont++) {
      this.addNewAnswer();
    }

    this.icfestModuleService.getIcfesModule().subscribe((res: any)=>{
      this.items = [];
        for (let i = 0; i < res.length; i++) {
            this.items.push({label: res[i].knowledgeArea, value: res[i]._id});
        }
    });
  }

  ngOnInit(): void {

  }



  showDialog() {
    this.display = true;
  }

  getFromModules(){
    return this.icfestModuleService.getIcfesModule();
  }

  addNewAnswer () {
    this.question.answers.push(new Answer());
  }

  removeAnswer (answerIndex) {
    this.question.answers.splice (answerIndex,1);
  }
  changeGradeValue (answer, increment: number) {
    if (answer.grade < 100 && increment >0) {
      answer.grade += increment;
    } else  if  (answer.grade > -100 && increment <0) {
      answer.grade += increment;
    }
  }


  saveQuestion () {

    let ansWrds = this.question.answers;

    if(this.question.title != null){
      if(this.question.icfesModuleId != null){
        if(this.question.statement != null){
          for (let i of ansWrds){
            if (i.statement == undefined || i.grade==0){
              this.formsCorrect =false;
              break;
            }
          }
          if(this.question.feedback != null) {
            console.log("paso")
            this.icfestQuestionService.createQuestion(this.question);
            this.showDialog();
          }else{
            this.formsCorrect =false;

          }
        }
        else{
          this.formsCorrect =false;
        }
      }else{
        this.formsCorrect =false;
      }
    }
    else{
      this.formsCorrect =false;
    }
  }


}
