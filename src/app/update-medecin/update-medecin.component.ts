import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedecinService } from '../services/medecin.service';
import { Medecin } from 'src/app/model/medecin.model';
import { Hopital } from 'src/app/model/hopital.model';
import { HopitalWrapper } from '../model/hopitalWrapped.model';


@Component({
  selector: 'app-update-medecin',
  templateUrl: './update-medecin.component.html',
  styleUrls: ['./update-medecin.component.css']
})
export class UpdateMedecinComponent {
  currentMedecin = new Medecin();
  hopitales!: Hopital[];
  updateHopId!: number;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private medecinService: MedecinService) { }
  ngOnInit(): void {
    this.medecinService.consulterMedecin(this.activatedRoute.snapshot.params['id']).subscribe(med => { this.currentMedecin = med; });

   /* this.medecinService.listeHopitals().
      subscribe((hops:   ) => {
       // this.hopitales = hops;
        console.log(hops);
      });*/
      
        this.medecinService.listeHopitals().subscribe((hopitalWrappers: any) => {
          this.hopitales=hopitalWrappers._embedded.hopitals
          console.log(hopitalWrappers._embedded.hopitals.forEach((element:Hopital) => {
            console.log(element);
            
          }))
          
      })

    /*this.medecinService.consulterHopital(this.activatedRoute.snapshot.params['id']). subscribe(med => {
        this.currentMedecin = med;
        this.updateHopId = this.currentMedecin.hopital.idHop;
      });*/
  }


  updateMedecin() {
    this.currentMedecin.hopital = this.hopitales.
      find(hop => hop.idHop == this.updateHopId)!;
    this.medecinService.updateMedecin(this.currentMedecin).subscribe(med => {
      this.router.navigate(['medecins']);
    }
    );
  }


}
