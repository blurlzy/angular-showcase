import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// layout components
import { MaterialLayoutComponent } from './shared/layout/material-layout/material-layout.component';
import { MaterialLayout2Component } from './shared/layout/material-layout2/material-layout2.component';

// page components
import { Screen1Component } from './samples/pages/screen1/screen1.component';
import { Screen2Component } from './samples/pages/screen2/screen2.component';

const routes: Routes = [
  {
    path: '', // material layout,
    component: MaterialLayoutComponent,
    children: [
      { path: '', component: Screen1Component }
    ]
  },
  {
    path: 'material2', // material layout 2,
    component: MaterialLayout2Component,
    children: [
      { path: '', component: Screen2Component }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
