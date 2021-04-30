import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleComponent } from './serpro-components/module-creation/module-creation.component';
import { QuestionCreationComponent } from './serpro-components/question-creation/question-creation.component';
import { TestCreationComponent } from './serpro-components/test-creation/test-creation.component';
import { LoginComponent } from "./login/login.component";


const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch: 'full'},
  {path: 'addModule', component: ModuleComponent},
  {path: 'addTest', component: TestCreationComponent},
  {path: 'addQuestion', component: QuestionCreationComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
