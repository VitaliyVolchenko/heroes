import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent }      from './heroes/heroes.component';
import { HeroDetailComponent }  from '../hero/hero-detail/hero-detail.component';

const routes: Routes = [
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes-list', component: HeroesComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes), 
    CommonModule
  ],
  exports: [ RouterModule ]
})
export class HeroesRoutingModule { }
