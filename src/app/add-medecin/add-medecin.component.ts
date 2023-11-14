import { Component } from '@angular/core';
import { Medecin } from '../model/medecin.model'; 
import { MedecinService } from '../services/medecin.service';
import { Hopital } from '../model/hopital.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-medecin',
  templateUrl: './add-medecin.component.html',
  styleUrls: ['./add-medecin.component.css']
})
export class AddMedecinComponent {
  newMedecin = new Medecin();
  hopitales! :Hopital[];
  newIdHop! :number;
  newHopital! : Hopital;
  constructor(private medecinService: MedecinService, private router :Router) { }
  ngOnInit() {
    this.hopitales = this.medecinService.listeHopitals();
    }

  addMedecin(){
   // console.log(this.newMedecin);
   this.newHopital = 
   this.medecinService.consulterHopital(this.newIdHop);
   this.newMedecin.hopital = this.newHopital;
   this.medecinService.ajouteMedecin(this.newMedecin);
   this.router.navigate(['medecins']);

    }
    
}
