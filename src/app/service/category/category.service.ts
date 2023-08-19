import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private httpClient: HttpClient) {}

  public CategoryApi(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/category');
  }
}
