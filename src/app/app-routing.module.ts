import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './components/add-item/add-item.component';
import { FoodComponent } from './components/food/food.component';
import { HomeComponent } from './components/home/home.component';
import { ItemDescriptionComponent } from './components/item-description/item-description.component';
import { ItemsListComponent } from './components/items-list/items-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'food', component: FoodComponent },
  { path: 'items-list', component: ItemsListComponent},
  { path: 'add-item', component: AddItemComponent },
  { path: 'edit-item/:id', component: ItemDescriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
