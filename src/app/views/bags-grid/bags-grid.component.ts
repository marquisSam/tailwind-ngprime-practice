import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Bag } from '../../stores/bags/model';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-bags-grid',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
  ],
  templateUrl: './bags-grid.component.html',
  styleUrl: './bags-grid.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BagsGridComponent {
  @Input() bags: Bag[] = [];
}
