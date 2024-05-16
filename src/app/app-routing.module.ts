import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Child1Component } from './child1/child1.component';
import { Child11Component } from './child1/child11/child11.component';

const routes: Routes = [
  {path:"child1", component:Child1Component},
  {path:"child11",component:Child11Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
