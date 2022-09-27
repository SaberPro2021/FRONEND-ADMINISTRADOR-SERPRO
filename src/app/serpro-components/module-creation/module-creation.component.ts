import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { IcfestModuleService } from 'src/app/services/service-module/icfest-module.service';
import { IcfesModule } from '../../models/module.model'

@Component({
  selector: 'app-icfes-module',
  templateUrl: './module-creation.component.html',
  styleUrls: ['./module-creation.component.css']
})
export class ModuleComponent implements OnInit {

  icfesModule: IcfesModule;
  formsCorrect : boolean = true;
  items: SelectItem[];
  item: string;
  display: boolean;
  mensaje: String;
  public imagePath;
  imgURL: any;
  public message: string;

  constructor(private icfesModuleService: IcfestModuleService) {
    this.display=false;
    this.icfesModule = new IcfesModule();
    this.mensaje = "Algo falta por llenar, \n Por favor revise los campos que ningunno se encuentre vacio";
   }

  ngOnInit(): void {

  };

  preview(files) {
    if (files.length === 0)
      return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }

  showDialog(){
    this.display = true;
  }

  onFileChanged(e){
    this.icfesModule.imageModule;
  }

  saveIcfesModule(){
   try{
      if(this.icfesModule.description != null){
        if(this.icfesModule.evaluationSubject != null){
          if(this.icfesModule.knowledgeArea != null){
            this.icfesModuleService.posIcfesModule(this.icfesModule);
            this.mensaje = "El modulo se ha subido correctamente";
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
   }catch(err){
    this.showDialog();
   }
  }
}
