import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PackmanComponent } from './packman/packman.component';
import { Board } from './packman/services/boards';
import { Bubbles } from './packman/services/bubbles';

@NgModule({
  declarations: [
    AppComponent,
    PackmanComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [Board,Bubbles],
  bootstrap: [AppComponent]
})
export class AppModule { }
