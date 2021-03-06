import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionsComponent } from '~layouts/questions/questions.component';
import { MainComponent } from '~layouts/main/main.component';
import { QuestionComponent } from '~layouts/question/question.component';
import { CaseComponent } from '~layouts/case/case.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: MainComponent },
  { path: ':path', component: CaseComponent },
  { path: 'questions', component: QuestionsComponent },
  { path: 'detail/:id', component: QuestionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
