import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Bag } from '../../stores/bags/model';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-bags-grid',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
  ],
  templateUrl: './bags-grid.component.html',
  styleUrl: './bags-grid.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BagsGridComponent {

  @Output() deleteBag = new EventEmitter<string>();
  @Input() bags: Bag[] = [];
}
