import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MembreService } from '../services/membre.service';
import { Membre } from '../model/membre.model';




@Component({
  selector: 'app-update-membre',
  templateUrl: './update-membre.component.html',
  styles: [
  ]
})
export class UpdateMembreComponent implements OnInit {
  currentMembre = new Membre ();

  constructor(private activatedRoute: ActivatedRoute,
     private router: Router,
     private membreService: MembreService) { }

  ngOnInit(): void {
    // console.log(this.activatedRoute.snapshot.params.id);
    this.currentMembre = this.membreService.consulterMembre(this.activatedRoute.snapshot.params.id);
    console.log(this.currentMembre);
  }
    updateMembre(){
      // console.log(this.currentMembre);
      this.membreService.updateMembre(this.currentMembre);
      this.router.navigate(["membres"]);
      
     
  }
}