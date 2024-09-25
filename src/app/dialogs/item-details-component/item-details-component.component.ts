import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Signal,
  signal,
} from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DndItem } from '../../stores/items/model';

@Component({
  selector: 'app-item-details-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-details-component.component.html',
  styleUrl: './item-details-component.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemDetailsComponentComponent {
  constructor(private dialogConfig: DynamicDialogConfig) {}
  item = signal<DndItem | null>(this.dialogConfig.data.item);
}
