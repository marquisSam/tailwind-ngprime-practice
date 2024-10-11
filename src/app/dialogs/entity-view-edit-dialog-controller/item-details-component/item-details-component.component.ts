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
import { FormItemComponent } from '../../../forms/form-item/form-item.component';
import { DndItem, DndItemCreateDTO, DndItemUpdateDTO } from '../../../stores/items/model';
import { SingleItemViewComponent } from '../../../views/single-item-view/single-item-view.component';
import { dialogMode } from '../../dialog-model';
import { ItemActions } from '../../../stores/items';
import { LoadingStateService } from '../../../stores/loading-state.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { EntityViewEditDirective } from '../entity-view-edit.directive';
import { selectItemById } from '../../../stores/items/selectors';

@Component({
  selector: 'app-item-details-component',
  standalone: true,
  imports: [CommonModule, FormItemComponent, SingleItemViewComponent, ButtonModule, DividerModule, NgxSpinnerModule],
  templateUrl: './item-details-component.component.html',
  styleUrl: './item-details-component.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemDetailsComponentComponent extends EntityViewEditDirective {
  constructor(private store: Store, private loadingStateService: LoadingStateService, dialogConfig: DynamicDialogConfig) {
    super(dialogConfig);
  }

  item$ = this.store.selectSignal(selectItemById(this.dialogConfig.data?.data?.id));
  onSubmit(formData: DndItemCreateDTO | DndItemUpdateDTO) {

    if (this.item()?.id) {
      this.store.dispatch(ItemActions.updateItem(formData as DndItemUpdateDTO, this.item()?.id as string));
    } else {
      this.store.dispatch(ItemActions.createItem(formData as DndItemCreateDTO));
    }
    this.toggleEdit();
  }
  itemIsCreating = computed(() => this.loadingStateService.itemIsCreating());
  itemIsUpdating = computed(() => this.loadingStateService.itemIsUpdating());
}
