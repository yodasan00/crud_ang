
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root', // Makes this service available app-wide
})
export class ApiService {
  private baseUrl = 'http://localhost:8000/api/items/'; // Update with the actual backend API endpoint

  constructor(private http: HttpClient) {}

  
  getItems(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  
  addItem(item: any): Observable<any> {
    console.log('Request Payload:', item);
    return this.http.post<any>(this.baseUrl, item);
  }

  
  deleteItem(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}${id}/`);
  }

  updateItem(item: any) {
    return this.http.put(`${this.baseUrl}${item.id}/`, item); 
}
}
