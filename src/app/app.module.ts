import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { KeyComponent } from './components/key/key.component';
import { DisplayComponent } from './components/display/display.component';

@NgModule({
  declarations: [
    AppComponent,
    KeyComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
