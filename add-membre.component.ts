import { Component, OnInit } from '@angular/core';
import { Membre } from '../model/membre.model';
import { MembreService } from '../services/membre.service';


@Component({
  selector: 'app-add-membre',
  templateUrl: './add-membre.component.html',
})
export class AddMembreComponent implements OnInit {
  
  newMembre = new Membre();

  message: string;
  constructor(private membreService : MembreService) { }

  ngOnInit(): void {
  }

  addMembre(){
    // console.log(this.newMembre);
    this.membreService.ajouterMembre(this.newMembre);
    this.message = "Nouveau membre ajouté avec succée !";
  }

}
