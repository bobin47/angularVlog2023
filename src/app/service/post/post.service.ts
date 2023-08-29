import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private httpClient: HttpClient) {}

  GetAllPost(
    limit: number,
    page: number,
    search?: string,
    category?: number
  ): Observable<any> {
    let params = new HttpParams()
      .set('limit', limit.toString())
      .set('page', page.toString());
    if (search !== null && search !== undefined) {
      params = params.set('search', search);
    }
    if (category !== null && category !== undefined) {
      params = params.set('category', category.toString());
    }
    return this.httpClient.get('http://localhost:3000/posts', { params });
  }

  uploadFormData(formData: FormData): Observable<any> {
    const url = 'http://localhost:3000/posts';
    return this.httpClient.post(url, formData);
  }

  editPostApi(formData: FormData, id: number): Observable<any> {
    return this.httpClient.put(`http://localhost:3000/posts/${id}`, formData);
  }

  deletePostApi(id: number): Observable<any> {
    return this.httpClient.delete(`http://localhost:3000/posts/${id}`);
  }

  detailPost(id: number): Observable<any> {
    return this.httpClient.get(`http://localhost:3000/posts/${id}`);
  }

  getPostWithIdUser(email: string): Observable<any> {
    return this.httpClient.get(`http://localhost:3000/posts/user/${email}`);
  }
}
