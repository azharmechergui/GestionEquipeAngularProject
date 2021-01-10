import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Membre} from '../model/membre.model'
import { MembreService } from '../services/membre.service';
@Component({
  selector: 'app-membres',
  templateUrl: './membres.component.html',
})
export class MembresComponent implements OnInit {
  
  membres : Membre[]; //tableau des membres

  constructor(private membreService : MembreService) {
    this.membres = membreService.listeMembres(); 
    

    
  }

  ngOnInit(): void {
  }

  supprimerProduit(mem:Membre){
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.membreService.supprimerProduit(mem);

  }}
