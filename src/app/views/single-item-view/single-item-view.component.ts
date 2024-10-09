import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { DndItem } from './../../stores/items/model';

@Component({
  selector: 'app-single-item-view',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './single-item-view.component.html',
  styleUrl: './single-item-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleItemViewComponent {
  @Output() edit = new EventEmitter<void>();
  @Input() item: DndItem | undefined;
}
