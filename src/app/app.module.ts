import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '~services/in-memory-data.service';
/*
NOTE: using ngx-markdown@~10.0.0
https://github.com/jfcere/ngx-markdown/issues/252
*/
import { MarkdownModule } from 'ngx-markdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsModule } from '~layouts/layouts.module';
import { ComponentsModule } from '~components/components.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    ComponentsModule,
    BrowserModule,
    AppRoutingModule,
    LayoutsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
    MarkdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
