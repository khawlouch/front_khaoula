import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedecinsComponent } from './medecins/medecins.component';
import { AddMedecinComponent } from './add-medecin/add-medecin.component';
import { FormsModule } from '@angular/forms';
import { UpdateMedecinComponent } from './services/update-medecin/update-medecin.component';
@NgModule({
  declarations: [
    AppComponent,
    MedecinsComponent,
    AddMedecinComponent,
    UpdateMedecinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
