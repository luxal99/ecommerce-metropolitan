import {MatSnackBar} from '@angular/material';

export class OpenSnackbar {
  static openSnackBar(snackbar: MatSnackBar, message: string) {
    snackbar.open(message, 'DONE');
  }
}
