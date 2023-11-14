import { Injectable } from '@angular/core';
import { Medecin } from '../model/medecin.model';
import { Hopital } from '../model/hopital.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};
@Injectable({
  providedIn: 'root'
})
export class MedecinService {
apiURL: string = 'http://localhost:8080/produits/api';

medecins : Medecin[];
medecin! : Medecin;
hopitals : Hopital[];
  constructor(private http : HttpClient) { 

    this.hopitals = [
      {idHop : 1,nomHop: "Rabta"},
      {idHop : 2,nomHop: "Militaire"}];
   this.medecins =[
      {idMedecin : 1, nomMedecin : "ahmed", salaireMedecin : 3000.600, dateContrat : new Date("01/14/2011"), hopital :{idHop : 1,nomHop: "Rabta"}},
      {idMedecin : 2, nomMedecin : "sami", salaireMedecin : 400.000, dateContrat : new Date("12/17/2010"), hopital :  {idHop : 2,nomHop: "Militaire"}},
      {idMedecin : 3, nomMedecin :"sarra", salaireMedecin : 900.123, dateContrat : new Date("02/20/2020"), hopital :{idHop : 1,nomHop: "Rabta"}}
    ];
  }
  listeMedecins(): Observable<Medecin[]>{
    return this.http.get<Medecin[]>(this.apiURL);

  }
  ajouteMedecin( med: Medecin){
    this.medecins.push(med);
  }
  supprimerMedecin( med: Medecin){
    //supprimer le produit prod du tableau produits
    const index = this.medecins.indexOf(med, 0);
    if (index > -1) {
    this.medecins.splice(index, 1);
    }
    //ou Bien
    /* this.produits.forEach((cur, index) => {
    if(prod.idProduit === cur.idProduit) {
    this.produits.splice(index, 1);
    }
    }); */
    }
  consulterMedecin(id:number): Medecin{
    this.medecin = this.medecins.find(m => m.idMedecin == id)!;
    return this.medecin;
    }

 
trierProduits(){
  this.medecins = this.medecins.sort((n1,n2) => {
  if (n1.idMedecin! > n2.idMedecin!) {
  return 1;
  }
  if (n1.idMedecin! < n2.idMedecin!) {
  return -1;
  }
  return 0;
  });
  }
  updateMedecin(m:Medecin)
  {
  // console.log(p);
  this.supprimerMedecin(m);
  this.ajouteMedecin(m);
  this.trierProduits();
  }
  listeHopitals():Hopital[] {
    return this.hopitals;
    }
    consulterHopital(id:number): Hopital{ 
    return this.hopitals.find(hop => hop.idHop == id)!;
    }
    
}
