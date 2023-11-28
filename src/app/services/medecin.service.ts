import { Injectable } from '@angular/core';
import { Medecin } from '../model/medecin.model';
import { Hopital } from '../model/hopital.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiURL } from '../config';
import { HopitalWrapper } from '../model/hopitalWrapped.model';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class MedecinService {
apiURL: string = 'http://localhost:8080/medecins/api';
apiURLHop: string = 'http://localhost:8080/medecins/hop';

medecins : Medecin[] = []  ;
medecin! : Medecin;
hopitals : Hopital[];
  constructor(private http : HttpClient) { 

    this.hopitals = [
      {idHop : 2,nomHop: "Rabta"},
      {idHop : 3,nomHop: "Militaire"}];
   /*this.medecins =[
      {idMedecin : 1, nomMedecin : "ahmed", salaireMedecin : 3000.600, dateContrat : new Date("01/14/2011"), hopital :{idHop : 1,nomHop: "Rabta"}},
      {idMedecin : 2, nomMedecin : "sami", salaireMedecin : 400.000, dateContrat : new Date("12/17/2010"), hopital :  {idHop : 2,nomHop: "Militaire"}},
      {idMedecin : 3, nomMedecin :"sarra", salaireMedecin : 900.123, dateContrat : new Date("02/20/2020"), hopital :{idHop : 1,nomHop: "Rabta"}}
    ];*/
  }
  listeMedecins(): Observable<Medecin[]>{
    return this.http.get<Medecin[]>(apiURL);

  }
  ajouteMedecin( med: Medecin):Observable<Medecin>{
    return this.http.post<Medecin>(this.apiURL, med, httpOptions);
    }

  supprimerMedecin(id : number) {
      const url = `${this.apiURL}/${id}`;
      return this.http.delete(url, httpOptions);
      }
 
    consulterMedecin(id: number): Observable<Medecin> {
      const url = `${this.apiURL}/${id}`;
      return this.http.get<Medecin>(url);
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


  updateMedecin(med :Medecin) : Observable<Medecin>
  {
  return this.http.put<Medecin>(this.apiURL, med, httpOptions);
  }

listeHopitals():Observable<HopitalWrapper[]>{
return this.http.get<HopitalWrapper[]>(this.apiURLHop);
}
//listeHopitals():Hopital[] {
  //return this.hopitals;
  //}

  /*listeHopitals():Observable<Hopital[]>{
    return this.http.get<Hopital[]>(this.apiURL+"/hop");
    }*/
  consulterHopital(id:number): Hopital{ 
  return this.hopitals.find(hop => hop.idHop == id)!;
  }
    


}
