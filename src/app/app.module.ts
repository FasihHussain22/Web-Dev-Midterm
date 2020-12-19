import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InsertFormComponent } from './insert-form/insert-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    NavbarComponent,
    InsertFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
