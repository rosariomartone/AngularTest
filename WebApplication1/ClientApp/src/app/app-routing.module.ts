import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PoliciesComponent } from './policies/policies.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'policies',
    component: PoliciesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
