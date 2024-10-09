import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal
} from '@angular/core';
import { Store } from '@ngrx/store';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { FormItemComponent } from '../../forms/form-item/form-item.component';
import { DndItem, DndItemCreateDTO } from '../../stores/items/model';
import { SingleItemViewComponent } from '../../views/single-item-view/single-item-view.component';
import { dialogMode } from '../dialog-model';
import { ItemActions } from '../../stores/items';
import { LoadingStateService } from '../../stores/loading-state.service';
import { NgxSpinnerModule } from 'ngx-spinner';

@Component({
  selector: 'app-item-details-component',
  standalone: true,
  imports: [CommonModule, FormItemComponent, SingleItemViewComponent, ButtonModule, DividerModule, NgxSpinnerModule],
  templateUrl: './item-details-component.component.html',
  styleUrl: './item-details-component.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemDetailsComponentComponent {
  constructor(private dialogConfig: DynamicDialogConfig, private store: Store, private loadingStateService: LoadingStateService) { }

  item = signal<DndItem | undefined>(this.dialogConfig.data.data);
  formValid = signal<boolean>(false);
  mode = signal<dialogMode>(this.dialogConfig.data.mode);
  isViewMode = computed(() => this.mode() === dialogMode.View);

  toggleEdit() {
    if (this.mode() === dialogMode.View) {
      this.mode.set(dialogMode.Edit);
    } else {
      this.mode.set(dialogMode.View);
    }
  }
  onSubmit(item: DndItemCreateDTO) {
    console.log('item', item);
    this.store.dispatch(ItemActions.createItem(item));
    this.mode.set(dialogMode.View);
  }
  itemIsCreating = computed(() => this.loadingStateService.itemIsCreating());
  itemIsUpdating = computed(() => this.loadingStateService.itemIsUpdating());
}
