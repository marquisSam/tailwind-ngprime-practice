import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Bag } from '../../stores/bags/model';

@Component({
  selector: 'app-controller',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
  ],
  templateUrl: './controller.component.html',
  styleUrl: './controller.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControllerComponent {
  constructor(private dialogService: DialogService) {}
  ref: DynamicDialogRef | undefined;

  @Output() createNewItem = new EventEmitter<void>();
  @Output() createNewBag = new EventEmitter<void>();
}
