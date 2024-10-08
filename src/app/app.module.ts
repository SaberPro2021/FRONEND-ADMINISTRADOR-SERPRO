import { AlifeFileToBase64Module } from 'alife-file-to-base64';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionCreationComponent } from './serpro-components/question-creation/question-creation.component';
import { MultipleSelctionQuestionComponent } from './serpro-components/question-creation/question/multiple-selction-question/multiple-selction-question.component';
import { SerproNgQuillComponent } from './serpro-ng-quill/serpro-ng-quill.component';


// Import NGPrime Modules
import {EditorModule} from 'primeng/editor';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {SliderModule} from 'primeng/slider';
import {AccordionModule} from 'primeng/accordion';
import {DropdownModule} from 'primeng/dropdown';
import {MultiSelectModule} from 'primeng/multiselect';
import {ListboxModule} from 'primeng/listbox';
import {TableModule} from 'primeng/table';
import {TabMenuModule} from 'primeng/tabmenu';


import Quill from 'quill';
import ImageResize  from 'quill-image-resize';
import { ModuleComponent } from './serpro-components/module-creation/module-creation.component';
import { TestCreationComponent } from './serpro-components/test-creation/test-creation.component';
import { MenuComponent } from './menu/menu.component'
import {DialogModule} from 'primeng/dialog';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { TruefalseQuestionComponent } from './serpro-components/question-creation/question/truefalse-question/truefalse-question.component';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';





@NgModule({
  declarations: [
    AppComponent,
    QuestionCreationComponent,
    MultipleSelctionQuestionComponent,
    SerproNgQuillComponent,
    ModuleComponent,
    TestCreationComponent,
    MenuComponent,
    LoginComponent,
    TruefalseQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    EditorModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    CardModule,
    SliderModule,
    FormsModule,
    AccordionModule,
    HttpClientModule,
    DropdownModule,
    MultiSelectModule,
    ListboxModule,
    TableModule,
    TabMenuModule,
    DialogModule,
    NgbModule,
    ReactiveFormsModule,
    AlifeFileToBase64Module,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot() // required animations module

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor () {
    Quill.register('modules/imageResize', ImageResize);
  }
 }
