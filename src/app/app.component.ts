import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ItemActions } from './stores/items';
import { DndItems } from './stores/items/model';
import { selectDndItems } from './stores/items/selectors';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(ItemActions.getItems());
  }

  selectDndItems$: Observable<DndItems[]> = this.store.select(selectDndItems);
  title = 'tailwind-ngprime-practice';
}
