import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../global-interfaces';
import { Bag, BagsCreateDTO } from './model';

@Injectable({
  providedIn: 'root',
})
export class BagsService {
  constructor(private http: HttpClient) {}

  // GET http://localhost:5113/api/items
  getAll(): Observable<ApiResponse<Bag[]>> {
    console.log('service getAll');
    return this.http.get<ApiResponse<Bag[]>>('http://localhost:5113/api/bags');
  }
  // POST http://localhost:5113/api/items
  create(item: BagsCreateDTO): Observable<ApiResponse<Bag>> {
    return this.http.post<ApiResponse<Bag>>('http://localhost:5113/api/bags', item);
  }
}
