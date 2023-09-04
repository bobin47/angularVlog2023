import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private httpClient: HttpClient) {}

  createCompanyApi(body: any): Observable<any> {
    return this.httpClient.post('http://localhost:3000/company', body);
  }
  updateCompanyApi(id: number, body: any): Observable<any> {
    return this.httpClient.put(`http://localhost:3000/company/${id}`, body);
  }
  FindAllCompanyApi(
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
    return this.httpClient.get(`http://localhost:3000/company/all`, { params });
  }
  FindOneCompanyApi(id: number): Observable<any> {
    return this.httpClient.get(`http://localhost:3000/company/${id}`);
  }
  DeleteCompanyApi(id: number): Observable<any> {
    return this.httpClient.delete(`http://localhost:3000/company/${id}`);
  }
}
