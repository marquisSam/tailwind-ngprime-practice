import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { BagDialogueComponent } from '../../dialogs/bagDialogue/bagDialogue.component';
import { dialogMode } from '../../dialogs/dialog-model';
import { Bag } from '../../stores/bags/model';

@Component({
  selector: 'app-controller',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule
  ],
  templateUrl: './controller.component.html',
  styleUrl: './controller.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControllerComponent {
  constructor(private dialogService: DialogService) {}
  ref: DynamicDialogRef | undefined;

  @Output() openBagDialog = new EventEmitter<{ data : Bag}>();
  @Output() createNewBag = new EventEmitter<void>();
}
