import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseAction, User } from 'src/app/types/user.type';
import { ResponseData } from 'src/app/types/responseData.type';
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
  ): Observable<ResponseData<User[]>> {
    let params = new HttpParams()
      .set('limit', limit.toString())
      .set('page', page.toString());
    if (search !== null && search !== undefined) {
      params = params.set('search', search);
    }
    return this.httpClient.get<ResponseData<User[]>>(`${this.url}users`, {
      params
    });
  }

  public updateUser(id: number, body: any): Observable<ResponseAction> {
    return this.httpClient.put<ResponseAction>(`${this.url}users/${id}`, body);
  }

  public deleteUser(id: number): Observable<ResponseAction> {
    return this.httpClient.delete<ResponseAction>(`${this.url}users/${id}`);
  }

  public createUser(body: any): Observable<ResponseAction> {
    return this.httpClient.post<ResponseAction>(
      `${this.url}users/create`,
      body
    );
  }

  public uploadAva(formData: FormData): Observable<any> {
    return this.httpClient.post(`${this.url}users/upload-avatar`, formData);
  }
}
