import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Breakpoints, BreakpointObserver, BreakpointState } from '@angular/cdk/layout';


// models
import { NotifierService } from '../../../shared/services/notifier.service';
import { SnackbarService } from '../../../shared/services/snackbar.service';
@Component({
	selector: 'app-screen2',
	templateUrl: './screen2.component.html',
	styleUrls: ['./screen2.component.scss']
})
export class Screen2Component implements OnInit {
	// cols
	cols = [1, 2, 3, 4, 5, 6];

	// ctor
	constructor(private breakpointObserver: BreakpointObserver,
		private notifierService: NotifierService,
		private snackbarService: SnackbarService) { }

	ngOnInit(): void {
	
	}

	notify(): void {
		this.snackbarService.error('This is an error message');
	}
}
