import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { CircleComponent } from './circle/circle.component';
import { CircleListComponent } from './circle-list/circle-list.component';
import { CircleServiceService } from './services/circle-service.service';

@NgModule({
  declarations: [
    AppComponent,
    CircleComponent,
    CircleListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CircleServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
