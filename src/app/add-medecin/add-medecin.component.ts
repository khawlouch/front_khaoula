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
  hopitales? :Hopital[] ;
  newIdHop :number=0;
  newHopital : Hopital | undefined ;
  constructor(private medecinService: MedecinService, private router :Router) { }

  ngOnInit() : void {
   //this.hopitales = this.medecinService.listeHopitals();
  /* this.medecinService.listeHopitals().
   subscribe((hops:any) => {
    console.log("hops",hops);
   this.hopitales = hops._embedded.hopitales
  });*/


  this.medecinService.listeHopitals().subscribe((hopitalWrappers: any) => {
    this.hopitales=hopitalWrappers._embedded.hopitals
    console.log(hopitalWrappers._embedded.hopitals.forEach((element:Hopital) => {
      console.log(element);  
    }))
    
})
    }

    addMedecin(){
     
       //this.newHopital=this.hopitales?.find(hopital => hopital.idHop === this.newIdHop);
      // console.log(this.hopitales?.find(hopital => hopital.idHop === this.newIdHop));
       //console.log(this.newHopital);
    
      this.newHopital = this.hopitales?.find(hospital => hospital.idHop == this.newIdHop);
      console.log(this.newHopital);
      if(this.newHopital){
      this.newMedecin.hopital=this.newHopital}
      this.medecinService.ajouteMedecin(this.newMedecin)
      .subscribe(med => {
        console.log("res");
        
      console.log(med);
      this.router.navigate(['medecins']);
      });


    }
      }
    
