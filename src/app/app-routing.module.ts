import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroesModule }   from './hero/heroes.module';


const routes: Routes = [  
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'heroes',
    loadChildren: './hero/heroes.module#HeroesModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes), HeroesModule ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
