import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { ComponentsModule } from '~components/components.module';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionComponent } from './question/question.component';
import { RouterModule } from '@angular/router';
import { CaseComponent } from './case/case.component';

@NgModule({
  declarations: [MainComponent, QuestionsComponent, QuestionComponent, CaseComponent],
  imports: [CommonModule, ComponentsModule, FormsModule, RouterModule],
  exports: [MainComponent],
})
export class LayoutsModule {}
