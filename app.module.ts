import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MembresComponent } from './membres/membres.component';
import { AddMembreComponent } from './add-membre/add-membre.component';
import { FormsModule} from '@angular/forms';
import { UpdateMembreComponent } from './update-membre/update-membre.component';

@NgModule({
  declarations: [
    AppComponent,
    MembresComponent,
    AddMembreComponent,
    UpdateMembreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
