import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DndItem } from './model';
import { ApiResponse } from '../global-interfaces';

@Injectable({
  providedIn: 'root',
})
export class itemsManagerService {
  constructor(private http: HttpClient) {}

  // GET http://localhost:5113/api/items
  getAll(): Observable<ApiResponse<DndItem[]>> {
    return this.http.get<ApiResponse<DndItem[]>>('http://localhost:5113/api/items');
  }
  // POST http://localhost:5113/api/items
  create(item: DndItem): Observable<ApiResponse<DndItem>> {
    return this.http.post<ApiResponse<DndItem>>('http://localhost:5113/api/items', item);
  }
}
