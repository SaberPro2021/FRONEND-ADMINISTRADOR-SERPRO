import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SelectItem } from 'primeng/api';
import { Observable, ReplaySubject } from 'rxjs';
import { IcfestModuleService } from 'src/app/services/service-module/icfest-module.service';
import { IcfesModule } from '../../models/module.model';

@Component({
  selector: 'app-icfes-module',
  templateUrl: './module-creation.component.html',
  styleUrls: ['./module-creation.component.css'],
})
export class ModuleComponent implements OnInit {
  icfesModule: IcfesModule;
  formsCorrect: boolean = true;
  items: SelectItem[];
  item: string;
  display: boolean;
  mensaje: String;
  public imagePath;
  imgURL: any;
  public message: string;
  public base64:string ="Base64...";
  public fileSelected?: any;
  //String de salida
  base64Output: string;

  constructor(private icfesModuleService: IcfestModuleService, private sant:DomSanitizer) {
    this.display = false;
    this.icfesModule = new IcfesModule();
    this.mensaje =
      'Algo falta por llenar, \n Por favor revise los campos que ningunno se encuentre vacio';

  }

  ngOnInit(): void {}

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

  showDialog() {
    this.display = true;
  }

  onFileChanged(files) {
    this.base64Output = files[0].base64;


    //this.convertFile(files.name).subscribe(base64 => {
    //  this.base64Output = base64;
    //});
  }

  convertFile(files : File) : Observable<string> {
    const result = new ReplaySubject<string>(1);
    const reader = new FileReader();
    reader.readAsBinaryString(files);
    reader.onload = (event) => result.next(btoa(event.target.result.toString()));
    return result;

  }

  saveIcfesModule() {
    try {
      if (this.icfesModule.description != null) {
        if (this.icfesModule.evaluationSubject != null) {
          if (this.icfesModule.knowledgeArea != null) {
            this.icfesModule.imageModule = this.base64Output; //this.imagePath[0];
            this.icfesModuleService.posIcfesModule(this.icfesModule);
            this.mensaje = 'El modulo se ha subido correctamente';
            this.showDialog();
          } else {
            this.showDialog();
          }
        } else {
          this.showDialog();
        }
      } else {
        this.showDialog();
      }
    } catch (err) {
      this.showDialog();
    }
  }
}
