import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { DndItems } from '../../stores/items/model';
import { DialogService } from 'primeng/dynamicdialog';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { StringListPipe } from '../../../custom-pipes/string-list.pipe';

@Component({
  selector: 'app-items-grid',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    StringListPipe,
  ],
  templateUrl: './items-grid.component.html',
  styleUrl: './items-grid.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemsGridComponent {
  @Input() coolItems: DndItems[] = [];
  @Output() itemSelected = new EventEmitter<DndItems>();
 }
