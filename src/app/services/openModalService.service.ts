import { Injectable } from '@angular/core';
import { DialogService, DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { BagDialogueComponent } from '../dialogs/entity-view-edit-dialog-controller/bagDialogue/bagDialogue.component';
import { DndItem } from '../stores/items/model';
import { ItemDetailsComponentComponent } from '../dialogs/entity-view-edit-dialog-controller/item-details-component/item-details-component.component';
import { dialogMode } from '../dialogs/dialog-model';
import { Bag } from '../stores/bags/model';
@Injectable({
  providedIn: 'root'
})
export class OpenModalService {

  modalConfig: DynamicDialogConfig = {
    width: '50vw',
    modal: true,
    breakpoints: {
      '960px': '75vw',
      '640px': '90vw',
    },
  };

  openBagDialog(data?: Bag, mode: dialogMode = dialogMode.View): DynamicDialogRef {
    return this.dialogService.open(BagDialogueComponent, {
      ...this.modalConfig,
      header: 'Add Bag',
      data: {
        mode,
        data,
      },
    });
  }
  openItemDialog(data?: DndItem, mode: dialogMode = dialogMode.View): DynamicDialogRef {
    return this.dialogService.open(ItemDetailsComponentComponent, {
      ...this.modalConfig,
      header: mode === dialogMode.View ? 'View Item' : 'Edit Item',
      data: {
        mode,
        data,
      },
    });
  }

  constructor(private dialogService: DialogService) { }
}
