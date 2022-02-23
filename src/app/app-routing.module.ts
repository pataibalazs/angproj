import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { InitialViewComponent } from './initial-view/initial-view.component';
import { SecondaryViewComponent } from './secondary-view/secondary-view.component';
import { ThirdViewComponent } from './third-view/third-view.component';

const routes: Routes = [
  { path: '', redirectTo: 'initial', pathMatch: 'full' },
  { path: 'initial', component: InitialViewComponent },
  { path: 'secondary', component: SecondaryViewComponent },
  { path: 'third', component: ThirdViewComponent }

];

//ez az ngmodule figyel a weboldal helyi változásokra
@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
