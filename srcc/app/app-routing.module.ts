import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './cart-page/cart-page.component';
import { AppComponent } from './app.component';
import { UserHomeComponent } from './user-home/user-home.component';

const routes: Routes = [
  {path:"cart-page", component:CartPageComponent},
  {path:"app", component:UserHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
