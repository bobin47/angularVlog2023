import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryType } from 'src/app/types/category.type';
import { ResponseData } from 'src/app/types/responseData.type';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private httpClient: HttpClient) {}

  public CategoryApi(): Observable<ResponseData<CategoryType[]>> {
    return this.httpClient.get<ResponseData<CategoryType[]>>(
      'http://localhost:3000/category'
    );
  }

  public CreateCategoryApi(body: any): Observable<any> {
    return this.httpClient.post('http://localhost:3000/category/create', body);
  }

  public UpdateCategoryApi(id: number, body: any): Observable<any> {
    return this.httpClient.post(`http://localhost:3000/category/${id}`, body);
  }

  public DeleteCategoryApi(id: number): Observable<any> {
    return this.httpClient.delete(
      `http://localhost:3000/category/${id}`
    );
  }
}
