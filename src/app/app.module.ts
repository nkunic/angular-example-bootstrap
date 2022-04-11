import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  imports: [BrowserModule, FormsModule, NgbModule],
  declarations: [AppComponent, NavbarComponent, NavComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
