import { Injectable } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { BagDialogueComponent } from '../dialogs/bagDialogue/bagDialogue.component';

@Injectable({
  providedIn: 'root'
})
export class OpenModalServiceService {
  openBagDialog(): DynamicDialogRef {
    return this.dialogService.open(BagDialogueComponent, {
      header: 'Add Bag',
      width: '50vw',
      modal: true,
      breakpoints: {
        '960px': '75vw',
        '640px': '90vw',
      },
    });
  }
  openItemDialog(data: DndItem): DynamicDialogRef {
    return this.dialogService.open(ItemDialogueComponent, {
      header: 'Add Item',
      width: '50vw',
      modal: true,
      breakpoints: {
        '960px': '75vw',
        '640px': '90vw',
      },
    });
  }

  constructor(private dialogService: DialogService) { }
}
