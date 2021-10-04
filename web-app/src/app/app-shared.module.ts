import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout'; // angular flex module 

// angular material module
import { AppAngularMaterialModule } from './app-material.module';

// pipes

// layout components
import { NotifierComponent } from './shared/components/notifier/notifier.component';
import { MaterialLayoutComponent } from './shared/layout/material-layout/material-layout.component';
import { MaterialLayout2Component } from './shared/layout/material-layout2/material-layout2.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    FlexLayoutModule,
    // application modules
    AppAngularMaterialModule
  ],
  declarations: [
    // pipe
    // components
    MaterialLayoutComponent,
    MaterialLayout2Component,
    NotifierComponent
  ],
  providers: [
    // inject shared services at module level

  ],
  exports: [
    /* modules */
    AppAngularMaterialModule,
    /* components */
    MaterialLayoutComponent,
    MaterialLayout2Component,
    NotifierComponent,
    /* pipes*/
  ]
})
export class AppSharedModule {

}
