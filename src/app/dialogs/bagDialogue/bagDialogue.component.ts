import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBagComponent } from '../../forms/form-bag/form-bag.component';
import { BagsCreateDTO } from '../../stores/bags/model';
import { Store } from '@ngrx/store';
import { BagsActions } from '../../stores/bags';

@Component({
  selector: 'app-bag-dialogue',
  standalone: true,
  imports: [
    CommonModule,
    FormBagComponent,
  ],
  templateUrl: './bagDialogue.component.html',
  styleUrl: './bagDialogue.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BagDialogueComponent {
  constructor(private store: Store) { }

  submitForm(data: BagsCreateDTO) {
    console.log('bag data', data);
    this.store.dispatch(BagsActions.createBag(data));
  }
}
