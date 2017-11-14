import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PerfectScrollbarDirective } from './perfect-scrollbar.directive';

@NgModule({
  declarations: [
    AppComponent,
    PerfectScrollbarDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
