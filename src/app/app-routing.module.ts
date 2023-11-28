import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedecinsComponent } from './medecins/medecins.component';
import { AddMedecinComponent } from './add-medecin/add-medecin.component';
import { UpdateMedecinComponent } from './update-medecin/update-medecin.component';
const routes: Routes = [
  {path: "medecins", component : MedecinsComponent},
  {path :"add-medecin", component : AddMedecinComponent},
  {path: "updateMedecin/:id", component: UpdateMedecinComponent},
  {path: "", redirectTo: "medecins", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
