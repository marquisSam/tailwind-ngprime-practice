import { CommonModule } from '@angular/common';
import { Component, computed, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { TheCompendiumComponent } from './layout/the-compendium/the-compendium.component';
import { OpenModalService } from './services/openModalService.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoadingStateService } from './stores/loading-state.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, TheCompendiumComponent],
  providers: [DialogService, OpenModalService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor( private primengConfig: PrimeNGConfig, private loadingStateService: LoadingStateService) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  title = 'tailwind-ngprime-practice';
}
