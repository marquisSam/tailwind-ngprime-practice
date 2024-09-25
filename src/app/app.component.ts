import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { TheCompendiumComponent } from './layout/the-compendium/the-compendium.component';
import { DialogService } from 'primeng/dynamicdialog';
import { OpenModalService } from './services/openModalService.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, TheCompendiumComponent],
  providers: [DialogService, OpenModalService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {

  }


  title = 'tailwind-ngprime-practice';
}
