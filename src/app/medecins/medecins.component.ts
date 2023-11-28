import { Component } from '@angular/core';
import { Medecin } from '../model/medecin.model';
import { MedecinService } from '../services/medecin.service';
@Component({
  selector: 'app-medecins',
  templateUrl: './medecins.component.html',
  styleUrls: ['./medecins.component.css']
})
export class MedecinsComponent {
  medecins : Medecin[] = [] ;


constructor(private medecinService: MedecinService) {
  //this.medecins = medecinService.listeMedecins();
  
  }

  ngOnInit(): void {
    this.chargerMedecins();
    
  }
  chargerMedecins(){
    this.medecinService.listeMedecins().subscribe(meds =>{
      console.log(meds);
      this.medecins = meds;
      });

  }
 
  supprimerMedecin(m: Medecin)
{
let conf = confirm("Etes-vous sûr ?");
if (conf)
this.medecinService.supprimerMedecin(m.idMedecin).subscribe(() => {
console.log("medecin supprimé");
this.chargerMedecins();
});
} 


}
