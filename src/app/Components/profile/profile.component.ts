import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  constructor(private _bottomSheet: MatBottomSheet) { }

  public openBottomSheet(): void {
    this._bottomSheet.open(BottomSheet);
  }
}

@Component({
  selector: 'bottom-sheet',
  templateUrl: 'bottom-sheet.html',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatSnackBarModule, MatTooltipModule],
})
export class BottomSheet {
  email = "shubhamsinghchouhan22@outlook.com";
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheet>,
    private _snackBar: MatSnackBar) {}

  public openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  public async copyEmail(): Promise<void> {
  // Copy the email
    await navigator.clipboard.writeText(this.email);
    this._snackBar.open("Copied", "", {
      duration: 2000,
      verticalPosition: "top"
    });
  }
}