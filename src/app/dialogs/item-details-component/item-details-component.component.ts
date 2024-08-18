import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Signal,
  signal,
} from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DndItems } from '../../stores/items/model';

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
  item = signal<DndItems | null>(this.dialogConfig.data.item);
}
