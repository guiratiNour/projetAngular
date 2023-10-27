import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddChansonComponent } from './add-chanson/add-chanson.component';
import { ChansonsComponent } from './chansons/chansons.component';

import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { UpdateChansonComponent } from './update-chanson/update-chanson.component';
import { RechercheParAlbumComponent } from './recherche-par-album/recherche-par-album.component';




const routes: Routes = [
  {path: "chansons", component : ChansonsComponent},
  {path: "add-chanson", component : AddChansonComponent},
  {path: "updateChanson/:id", component: UpdateChansonComponent},
  {path: "rechercheParAlbum", component : RechercheParAlbumComponent},
  {path: "rechercheParNom", component : RechercheParNomComponent},
  {path: "", redirectTo: "chansons", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
