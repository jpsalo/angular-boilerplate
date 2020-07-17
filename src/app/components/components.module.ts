import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { SpacesComponent } from './spaces/spaces.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [ButtonComponent, SpacesComponent, MessagesComponent],
  imports: [CommonModule],
  exports: [ButtonComponent, SpacesComponent, MessagesComponent],
})
export class ComponentsModule {}
