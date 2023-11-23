import { Component, Input, Output, EventEmitter, Inject } from '@angular/core';
import { SuperHero } from '../../interfaces/superHero';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-deletion-dialog',
  templateUrl: './deletion-dialog.component.html',
  styleUrls: ['./deletion-dialog.component.scss']
})
export class DeletionDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: string) { }

}
