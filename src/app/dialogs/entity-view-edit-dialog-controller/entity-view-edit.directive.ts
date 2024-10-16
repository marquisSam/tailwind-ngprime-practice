import { computed, Directive, inject, signal } from '@angular/core';
import { dialogMode } from '../dialog-model';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { ActionCreator, Store } from '@ngrx/store';
import { Actions } from '@ngrx/effects';

@Directive({
  selector: '[appEntityViewEdit]',
  standalone: true,
})
export abstract class EntityViewEditDirective {
  constructor(public dialogConfig: DynamicDialogConfig) {

   }
  protected store = inject(Store);
  protected actions$ = inject(Actions);

  formValid = signal<boolean>(false);
  mode = signal<dialogMode>(this.dialogConfig.data.mode);
  isViewMode = computed(() => this.mode() === dialogMode.View);

  toggleEdit() {
    if (this.mode() === dialogMode.View) {
      this.mode.set(dialogMode.Edit);
      console.log('toggleEdit', this.dialogConfig);
      this.dialogConfig.header = 'Edit Item';
    } else {
      this.dialogConfig.header = 'View Item';
      this.mode.set(dialogMode.View);
    }
  }
}
