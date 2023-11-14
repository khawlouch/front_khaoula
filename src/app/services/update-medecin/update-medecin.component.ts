import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedecinService } from '../medecin.service';
import { Medecin } from 'src/app/model/medecin.model';
import { Hopital } from 'src/app/model/hopital.model';

@Component({
  selector: 'app-update-medecin',
  templateUrl: './update-medecin.component.html',
  styleUrls: ['./update-medecin.component.css']
})
export class UpdateMedecinComponent {
  currentMedecin = new Medecin();
  hopitales! :Hopital[];
  updateHopId! :number;
  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private medecinService: MedecinService) { }
  ngOnInit() : void {
  // console.log(this.route.snapshot.params.id);
  this.hopitales = this.medecinService.listeHopitals();
  this.currentMedecin = this.medecinService.consulterMedecin(this.activatedRoute.snapshot. params['id']);
  this.updateHopId=this.currentMedecin.hopital.idHop;
 // console.log(this.currentMedecin);
  }
  updateMedecin()
  { //console.log(this.currentProduit);
    this.currentMedecin.hopital=this.medecinService.consulterHopital(this.updateHopId);
  this.medecinService.updateMedecin(this.currentMedecin);
  this.router.navigate(['medecins']);

  }


}
