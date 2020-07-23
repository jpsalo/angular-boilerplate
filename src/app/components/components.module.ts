import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { SpacesComponent } from './spaces/spaces.component';
import { MessagesComponent } from './messages/messages.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../app-routing.module';
import { HeroComponent } from './hero/hero.component';
import { CaseComponent } from './case/case.component';

@NgModule({
  declarations: [ButtonComponent, SpacesComponent, MessagesComponent, HeaderComponent, HeroComponent, CaseComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [ButtonComponent, SpacesComponent, MessagesComponent, HeaderComponent, HeroComponent, CaseComponent],
})
export class ComponentsModule {}
