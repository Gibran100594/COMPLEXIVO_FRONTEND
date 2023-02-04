import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule } from '@angular/common/http';
import { PagesModule } from './pages/pages.module';
import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    NopagesfoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
