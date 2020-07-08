import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { WaiterComponent } from './components/waiter/waiter.component';
import { ChefComponent } from './components/chef/chef.component';

import { RouterModule, Routes } from '@angular/router';
import { FoodMenuComponent } from './components/food-menu/food-menu.component';
import { DrinkMenuComponent } from './components/drink-menu/drink-menu.component';
import { HttpClientModule } from '@angular/common/http';

const route: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'waiter',
    component: WaiterComponent
  },
  {
    path: 'chef',
    component: ChefComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WaiterComponent,
    ChefComponent,
    FoodMenuComponent,
    DrinkMenuComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    RouterModule.forRoot(route),
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
