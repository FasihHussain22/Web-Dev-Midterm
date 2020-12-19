import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ItemComponent } from './item/item.component';
import { DisplayComponent } from './display/display.component';
import { InsertItemComponent } from './insert-item/insert-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ItemComponent,
    DisplayComponent,
    InsertItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
