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

  constructor(private icfesModuleService: IcfestModuleService) {
    this.display=false;
    this.icfesModule = new IcfesModule();
    this.mensaje = "Algo falta por llenar, \n Por favor revise los campos que ningunno se encuentre vacio";
   }

  ngOnInit(): void {

  };

  showDialog(){
    this.display = true;
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
