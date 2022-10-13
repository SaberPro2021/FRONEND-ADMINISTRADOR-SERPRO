import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleComponent } from './serpro-components/module-creation/module-creation.component';
import { QuestionCreationComponent } from './serpro-components/question-creation/question-creation.component';
import { TestCreationComponent } from './serpro-components/test-creation/test-creation.component';
import { LoginComponent } from "./login/login.component";
import { PermissionsGuard } from './guards/permissions.guard';


const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch: 'full'},
  {path: 'addModule', component: ModuleComponent, canActivate: [PermissionsGuard]},
  {path: 'addTest', component: TestCreationComponent, canActivate: [PermissionsGuard]},
  {path: 'addQuestion', component: QuestionCreationComponent, canActivate: [PermissionsGuard]},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
