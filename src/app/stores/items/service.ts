import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DndItems } from './model';
import { ApiResponse } from '../global-interfaces';

@Injectable({
  providedIn: 'root',
})
export class itemsManagerService {
  constructor(private http: HttpClient) {}

  // GET http://localhost:5113/api/items
  getAll(): Observable<ApiResponse<DndItems[]>> {
    return this.http.get<ApiResponse<DndItems[]>>('http://localhost:5113/api/items');
  }
  // POST http://localhost:5113/api/items
  create(item: DndItems): Observable<ApiResponse<DndItems>> {
    return this.http.post<ApiResponse<DndItems>>('http://localhost:5113/api/items', item);
  }
}
