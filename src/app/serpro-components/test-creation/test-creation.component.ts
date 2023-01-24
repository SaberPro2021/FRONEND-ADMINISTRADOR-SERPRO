import { Component, OnInit } from '@angular/core';
import { IcfesTest } from '../../models/test.model';
import { SelectItem } from 'primeng/api';
import { IcfesTestService } from '../../services/service-test/icfes-test.service';
import { IcfestQuestionService } from 'src/app/services/service-question/icfest-question.service';
import { IcfestModuleService } from '../../services/service-module/icfest-module.service';
import { Question } from 'src/app/models/question.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-test-creation',
  templateUrl: './test-creation.component.html',
  styleUrls: ['./test-creation.component.css']
})
export class TestCreationComponent implements OnInit {

  icfesTest: IcfesTest;
  itemsModules: SelectItem[];
  itemModule: string;
  display: boolean = false;
  mensaje: String;
  public imagePath;
  imgURL: any;
  public message: string;
  base64Output: string;
  itemsQuestions: SelectItem[];
  itemQuestion: Question;

  questionsSelected: Question[];

  constructor(
    private icfesTestService: IcfesTestService,
    private icfestQuestionService: IcfestQuestionService,
    private icfesModuleServices: IcfestModuleService,
    private sant : DomSanitizer
  ) {
    this.mensaje = "Algo falta por llenar, \n Por favor revise los campos que ningunno se encuentre vacio";
    this.questionsSelected = [];

    this.icfesTest = new IcfesTest();
    this.icfesModuleServices.getIcfesModule().subscribe((res: any)=>{
      this.itemsModules = [];
        for (let i = 0; i < res.length; i++) {
            this.itemsModules.push({label: res[i].knowledgeArea, value: res[i]._id});
        }
    });

    this.icfestQuestionService.getQuestions().subscribe((res: any)=>{
      this.itemsQuestions = [];
      for (let i = 0; i< res.length; i++){

        this.itemsQuestions.push({label: res[i].title, value: res[i]});
      }
    });
  };

  ngOnInit(): void {
  }

  showDialog() {
    this.display = true;
  }

  preview(files:FileList): void {

    const urlToBlob = window.URL.createObjectURL(files.item(0))
    this.imgURL = this.sant.bypassSecurityTrustResourceUrl(urlToBlob);
    if (files.length === 0) return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = 'Only images are supported.';
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    if(files[0]){
      reader.readAsDataURL(files[0]);
    }
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    };
  }

  onFileChanged(files){
    this.base64Output = files[0].base64;
  }


  deleteQuestion(_id: String){
    let posDelete;
    for(let i=0; i<this.questionsSelected.length; i++){
      if(_id==this.questionsSelected[i]._id){
        posDelete=i;
      }
    }

    this.questionsSelected.splice(posDelete,1);
  }

  updateList() {
    this.questionsSelected.push(this.itemQuestion);
  }

  changeGradeValue (answer, increment: number) {
    if (answer.grade < 100 && increment >0) {
      answer.grade += increment;
    } else  if  (answer.grade > -100 && increment <0) {
      answer.grade += increment;
    }
  }

  saveQuestion(){

    try{
      //CREATE A TEMPORAL ARRAY WHIT QUESTIONID
    let questionId = [];
    for(let i=0; i<this.questionsSelected.length; i++){
      questionId.push(this.questionsSelected[i]._id);
    }
      this.icfesTest.questions=questionId;
      if(this.icfesTest.description != null){
        if(this.icfesTest.moduleId != null){
          if(this.icfesTest.questions != null){
            if(this.icfesTest.title != null){
              this.icfesTest.imageTest = this.base64Output;
              this.icfesTestService.posIcfesModule(this.icfesTest);
              this.mensaje = "La prueba se ha subido correctamente";
              this.showDialog();
            }else {
              this.showDialog();
            }
          }else {
            this.showDialog();
          }
        }else {
          this.showDialog();
        }
      }else {
        this.showDialog();
      }

    }catch (err){
      this.showDialog();
    }


  }

}
