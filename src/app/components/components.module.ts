import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { SpacesComponent } from './spaces/spaces.component';
import { MessagesComponent } from './messages/messages.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../app-routing.module';
import { HeroComponent } from './hero/hero.component';
import { PreviewComponent } from './preview/preview.component';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [ButtonComponent, SpacesComponent, MessagesComponent, HeaderComponent, HeroComponent, PreviewComponent],
  imports: [CommonModule, AppRoutingModule, MarkdownModule.forChild()],
  exports: [ButtonComponent, SpacesComponent, MessagesComponent, HeaderComponent, HeroComponent, PreviewComponent],
})
export class ComponentsModule {}
