import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
 
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from '../../shared/services/in-memory-data.service';
 
import { HeroesRoutingModule }     from './heroes-routing.module';
 
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroSearchComponent }  from './hero-search/hero-search.component';


@NgModule({
  declarations: [    
    HeroesComponent,
    HeroDetailComponent,    
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,   
    HeroesRoutingModule,
    HttpClientModule,
 
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    CommonModule
  ], exports: [
    HeroesComponent,
    HeroDetailComponent,
    HeroSearchComponent
  ]
})
export class HeroesModule { }
