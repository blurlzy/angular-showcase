import { Injectable } from '@angular/core';

// angular material
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
        providedIn: 'root'
})
export class SnackbarService {
        // duration
        private durationSeconds: number = 1000 * 10;

        // ctor
        constructor(private snackBar: MatSnackBar) { 

        }

        public success(message: string) {
                // show message                    
                this.snackBar.open(message, 'x', {
                        duration: this.durationSeconds,
                        //panelClass: "snack-bar-success",
                        horizontalPosition: 'center'
                });
        }

        public error(message: string) {
                this.snackBar.open(message, 'Error', {
                        duration: this.durationSeconds,
                        //panelClass: "snack-bar-error",
                        horizontalPosition: 'center'
                });
        }
}
