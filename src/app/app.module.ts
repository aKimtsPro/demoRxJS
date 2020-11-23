import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ObservableBasicComponent } from './components/observableBasic/observableBasic.component';
import { Exo1Component } from './components/exo1/exo1.component';
import { FormsModule } from '@angular/forms';
import { HotColdComponent } from './components/hot-cold/hot-cold.component';
import { CommunicationAComponent } from './components/communication/CommunicationA/CommunicationA.component';
import { CommunicationBComponent } from './components/communication/CommunicationB/CommunicationB.component';
import { CommuncationService } from './components/communication/communcation.service';
import { Ordre2Component } from './components/ordre2/ordre2.component';

@NgModule({
  declarations: [
    AppComponent,
    ObservableBasicComponent,
    Exo1Component,
    HotColdComponent,
    CommunicationAComponent,
    CommunicationBComponent,
    Ordre2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CommuncationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
