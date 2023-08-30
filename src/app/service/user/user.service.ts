import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient) {}
  public url: string = 'http://localhost:3000/';

  public AllUserApi(
    limit: number,
    page: number,
    search?: string
  ): Observable<any> {
    let params = new HttpParams()
      .set('limit', limit.toString())
      .set('page', page.toString());
    if (search !== null && search !== undefined) {
      params = params.set('search', search);
    }
    return this.httpClient.get(`${this.url}users`, { params });
  }

  public updateUser(id: number, body: any): Observable<any> {
    return this.httpClient.put(`${this.url}users/${id}`, body);
  }

  public deleteUser(id: number): Observable<any> {
    return this.httpClient.delete(`${this.url}users/${id}`);
  }

  public createUser(body: any): Observable<any> {
    return this.httpClient.post(`${this.url}users/create`, body);
  }

  public uploadAva(formData:FormData):Observable<any>{
   return this.httpClient.post(`${this.url}users/upload-avatar`,formData)
  }
}
