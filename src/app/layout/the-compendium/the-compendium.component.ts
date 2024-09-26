import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { DndItem } from '../../stores/items/model';
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
import { BagsGridComponent } from '../../views/bags-grid/bags-grid.component';
import { BagsActions } from '../../stores/bags';
import { ItemActions } from '../../stores/items';
import { Bag } from '../../stores/bags/model';
import { selectBags } from '../../stores/bags/selectors';
import { ControllerComponent } from '../../views/controller/controller.component';
import { OpenModalService } from '../../services/openModalService.service';
import { dialogMode } from '../../dialogs/dialog-model';

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
    console.log('openItem',item);
    this.openModalService.openItemDialog(item, dialogMode.View);
  }
  openBag(bag: Bag) {
    console.log('openBag',bag);
    this.openModalService.openBagDialog(bag, dialogMode.View);
  }
  createNewBag() {
    console.log('createNewBag');
    this.openModalService.openBagDialog(undefined, dialogMode.Create);
  }
  createNewItem() {
    console.log('createNewItem');
    this.openModalService.openItemDialog(undefined, dialogMode.Create);
  }
}
