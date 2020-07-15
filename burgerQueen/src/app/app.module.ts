import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';


//  COMPONENTES
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { WaiterComponent } from './components/waiter/waiter.component';
import { ChefComponent } from './components/chef/chef.component';
import { FoodMenuComponent } from './components/food-menu/food-menu.component';
import { DrinkMenuComponent } from './components/drink-menu/drink-menu.component';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ConnectionService } from './connection.service';

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
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    RouterModule.forRoot(route),
    HttpClientModule

  ],
  providers: [ConnectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
