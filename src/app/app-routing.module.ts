import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'
import {CreateComponent} from './create/create.component'
import { UpdateComponent} from './update/update.component'

const routes: Routes = [
  {path: 'crud', redirectTo:'crud/home', pathMatch:'full'},
  {path: 'crud/home', component:HomeComponent},
  {path: 'crud/create', component:CreateComponent},
  {path: 'crud/update/:productId', component: UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
