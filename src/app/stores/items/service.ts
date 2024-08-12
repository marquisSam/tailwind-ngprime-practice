import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DndItems } from './model';

@Injectable({
  providedIn: 'root',
})
export class itemsManagerService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<DndItems[]> {
    const dndItems = this.http.get<DndItems[]>('assets/items.json');
    console.log('dndItems', dndItems);
    return dndItems;
  }
}
