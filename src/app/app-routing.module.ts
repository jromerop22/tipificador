import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantaComponent } from './componentes/planta/planta.component';

const routes: Routes = [
  {
    path:'planta',
    component: PlantaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
