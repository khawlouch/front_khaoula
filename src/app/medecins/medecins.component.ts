import { Component } from '@angular/core';
import { Medecin } from '../model/medecin.model';
import { MedecinService } from '../services/medecin.service';
@Component({
  selector: 'app-medecins',
  templateUrl: './medecins.component.html',
  styleUrls: ['./medecins.component.css']
})
export class MedecinsComponent {
  medecins : Medecin[];


constructor(private medecinService: MedecinService) {
  this.medecins = medecinService.listeMedecins();
  
  }

  ngOnInit(): void {
    this.medecinService.listeMedecins().subscribe(meds => {console.log(meds);
    this.medecins = meds;
    });
    }
  
  supprimerMedecin(m: Medecin)
  {
  //console.log(p);
  let conf = confirm("Etes-vous sûr ?");
   if (conf)
   this.medecinService.supprimerMedecin(m);
  
  }

}
