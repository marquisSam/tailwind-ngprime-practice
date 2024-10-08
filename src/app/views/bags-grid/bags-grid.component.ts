import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, EventEmitter, Input, Output, Signal } from '@angular/core';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Bag } from '../../stores/bags/model';
import { LoadingStateService } from '../../stores/loading-state.service';
import { SkeletonModule } from 'primeng/skeleton';
@Component({
  selector: 'app-bags-grid',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    NgxSpinnerModule,
    SkeletonModule,
  ],
  templateUrl: './bags-grid.component.html',
  styleUrl: './bags-grid.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BagsGridComponent {
  constructor(private loadingStateService: LoadingStateService) {

  }
  bagIsCreating = computed(() => this.loadingStateService.bagIsCreating());
  @Output() deleteBag = new EventEmitter<string>();
  @Input() bags: Bag[] = [];
}
