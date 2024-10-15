import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import {
  DialogService,
  DynamicDialogModule,
  DynamicDialogRef,
} from 'primeng/dynamicdialog';
import { Observable } from 'rxjs';
import { StringListPipe } from '../../../custom-pipes/string-list.pipe';
import { dialogMode } from '../../dialogs/dialog-model';
import { OpenModalService } from '../../services/openModalService.service';
import { BagsActions } from '../../stores/bags';
import { Bag } from '../../stores/bags/model';
import { selectBags } from '../../stores/bags/selectors';
import { ItemActions } from '../../stores/items';
import { DndItem } from '../../stores/items/model';
import { selectDndItems } from '../../stores/items/selectors';
import { BagsGridComponent } from '../../views/bags-grid/bags-grid.component';
import { ControllerComponent } from '../../views/controller/controller.component';
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
    BagsGridComponent,
    ControllerComponent
  ],

  templateUrl: './the-compendium.component.html',
  styleUrl: './the-compendium.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TheCompendiumComponent implements OnInit {
  constructor(private dialogService: DialogService, private store: Store, private openModalService: OpenModalService) {}

  selectDndItems$: Observable<DndItem[]> = this.store.select(selectDndItems);
  selectBags$: Observable<Bag[]> = this.store.select(selectBags);
  ref: DynamicDialogRef | undefined;

  ngOnInit(): void {
    this.store.dispatch(BagsActions.getBags());
    this.store.dispatch(ItemActions.getItems());
  }

  openItem(item: DndItem) {
    this.openModalService.openItemDialog(dialogMode.View, item?.id);
  }
  createNewItem() {
    this.openModalService.openItemDialog(dialogMode.Create);
  }
  deleteItem(id: string) {
    this.store.dispatch(ItemActions.deleteItem(id));
  }

  openBag(bag: Bag) {
    this.openModalService.openBagDialog(bag, dialogMode.View);
  }
  createNewBag() {
    this.openModalService.openBagDialog(undefined, dialogMode.Create);
  }
  deleteBag(bagId: string) {
    this.store.dispatch(BagsActions.deleteBag(bagId));
  }
}
