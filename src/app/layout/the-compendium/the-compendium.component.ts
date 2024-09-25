import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DndItems } from '../../stores/items/model';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { StringListPipe } from '../../../custom-pipes/string-list.pipe';
import {
  DialogService,
  DynamicDialogModule,
  DynamicDialogRef,
} from 'primeng/dynamicdialog';
import { ItemDetailsComponentComponent } from '../../dialogs/item-details-component/item-details-component.component';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectDndItems } from '../../stores/items/selectors';
import { ItemsGridComponent } from '../../views/items-grid/items-grid.component';

@Component({
  selector: 'the-compendium-layout',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    StringListPipe,
    ItemsGridComponent,
    DynamicDialogModule,
  ],
  providers: [DialogService],
  templateUrl: './the-compendium.component.html',
  styleUrl: './the-compendium.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TheCompendiumComponent {
  constructor(private dialogService: DialogService, private store: Store) {}

  selectDndItems$: Observable<DndItems[]> = this.store.select(selectDndItems);
  ref: DynamicDialogRef | undefined;

  openItem(item: DndItems) {
    this.ref = this.dialogService.open(ItemDetailsComponentComponent, {
      header: 'Item Details',
      width: '50vw',
      modal: true,
      breakpoints: {
        '960px': '75vw',
        '640px': '90vw',
      },
      data: {
        item,
      },
    });
  }
}
