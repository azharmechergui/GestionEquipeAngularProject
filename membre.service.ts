import { Injectable } from '@angular/core';
import { Membre } from '../model/membre.model';


@Injectable({
  providedIn: 'root'
})
export class MembreService {

  membres : Membre[]; //tableau de membre
  supprimerProduit: any;
  constructor() { 
    this.membres =[
      {id : 30392939 , nomMembre:"Ahmed", prenomMembre: "Hamdi", departement: "Marketing", dateAjout: new Date("09/03/2020")  },
      {id : 91948282 , nomMembre:"Ons", prenomMembre: "Younes", departement: "Ressource Humaine", dateAjout: new Date("06/10/2020")  },
      {id : 13892300 , nomMembre:"Anis", prenomMembre: "Rassil", departement: "Developpment et Recherche", dateAjout: new Date("05/07/2020")  },
      {id : 71259409 , nomMembre:"Yosra", prenomMembre: "Laribi", departement: "Finance", dateAjout: new Date("09/02/2020")  }
    ]
  
}
listeMembres():Membre[]{
  return this.membres;
}

ajouterMembre(membre: Membre){
  this.membres.push(membre);
  }

  supprimerMembre(mem:Membre){
    const index = this.membres.indexOf(mem, 0);
    if (index > -1){
     this.membres.splice(index, 1);
    }
  }

  consulterMembre(id:number){
    return this.membres.find(m => m.id == id);
    // return this.membre;
  }

  trierMembre(){
    this.membres=this.membres.sort((n1,n2) => {
      if( n1.id>n2.id){
        return 1;
      }
      if(n1.id < n2.id){
        return -1;
      }
      return 0;

    })
  }

  updateMembre(m:Membre){
    this.supprimerMembre(m);
    this.ajouterMembre(m);
    this.trierMembre();
  }


}
    

