import { NgModule, LOCALE_ID, DEFAULT_CURRENCY_CODE, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';;
import { FlexLayoutModule } from '@angular/flex-layout'; // angular flex module 

// modules
import { AppRoutingModule } from './app-routing.module';
import { AppSharedModule } from './app-shared.module';

// global error handling
import { GlobalErrorHandler } from './shared/services/error-handler.service';

// components
import { AppComponent } from './app.component';
import { Screen1Component } from './samples/pages/screen1/screen1.component';
import { Screen2Component } from './samples/pages/screen2/screen2.component';

@NgModule({
	declarations: [
		AppComponent,
		Screen1Component,
		Screen2Component,
	],
	imports: [
		FormsModule,
		ReactiveFormsModule,
		BrowserModule,
		BrowserAnimationsModule,
		RouterModule,
		HttpClientModule,
		FlexLayoutModule,
		/* application modules */
		AppRoutingModule,
		AppSharedModule,
	],
	providers: [
		{
			provide: ErrorHandler, // error handler
			useClass: GlobalErrorHandler
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
