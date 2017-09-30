import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CircleStoreService } from './services/circle.service';

import { CircleListComponent } from './circle-list/circle-list.component';
import { CircleStore } from './models/circle-store';


@NgModule({
  declarations: [
    AppComponent,
    CircleListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [CircleStoreService, CircleStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
