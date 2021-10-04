import { Injectable, ErrorHandler } from '@angular/core';

import { SnackbarService } from './snackbar.service';
@Injectable({  
        providedIn: 'root'
})
export class GlobalErrorHandler implements ErrorHandler {
        // ctor
        constructor(private snackbarService: SnackbarService) {

        }

        handleError(error:any) {
                console.log(error);
                this.snackbarService.error('One or more erros occurred.');
                // do something with the exception
              }
}