import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, EventEmitter, Input, Output, Signal } from '@angular/core';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { Bag } from '../../stores/bags/model';
import { LoadingStateService } from '../../stores/loading-state.service';
import { SkeletonModule } from 'primeng/skeleton';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-bags-grid',
  standalone: true,
  imports: [
    CommonModule,
    TagModule,
    CardModule,
    ButtonModule,
    NgxSpinnerModule,
    SkeletonModule,
    CarouselModule,
  ],
  templateUrl: './bags-grid.component.html',
  styleUrl: './bags-grid.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BagsGridComponent {
  constructor(private loadingStateService: LoadingStateService) { }

  responsiveOptions = [
    {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
    },
    {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
    }
  ];

  getSeverity(status: string) {
    switch (status) {
      case 'Low':
        return 'success';
      case 'AlmostFull':
        return 'warning';
      case 'Full':
        return 'danger';
      default:
        return 'info';
    }
  }

  bagIsCreating = computed(() => this.loadingStateService.bagIsCreating());
  @Output() deleteBag = new EventEmitter<string>();
  @Input() bags: Bag[] = [];
}
