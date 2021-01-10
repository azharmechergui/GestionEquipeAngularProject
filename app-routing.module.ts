import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MembresComponent } from './membres/membres.component';
import { AddMembreComponent } from './add-membre/add-membre.component';
import { UpdateMembreComponent } from './update-membre/update-membre.component';
  import { from } from 'rxjs';


const routes: Routes = [
 { path: "membres", component : MembresComponent },
 { path: "add-membre", component : AddMembreComponent },
 { path: "", redirectTo: "membres", pathMatch: "full"},
 { path: "updateMembre/:id", component : UpdateMembreComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
