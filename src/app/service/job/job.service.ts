import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  constructor(private httpClient: HttpClient) {}

  createJobApi(body: any): Observable<any> {
    return this.httpClient.post('http://localhost:3000/job', body);
  }

  updateJobApi(id: number, body: any): Observable<any> {
    return this.httpClient.put(`http://localhost:3000/job/${id}`, body);
  }

  FindAllJobApi(limit: number, page: number, search?: string): Observable<any> {
    let params = new HttpParams()
      .set('limit', limit.toString())
      .set('page', page.toString());
    if (search !== null && search !== undefined) {
      params = params.set('search', search);
    }
    return this.httpClient.get(`http://localhost:3000/job`, { params });
  }

  FindOneJobApi(id: number): Observable<any> {
    return this.httpClient.get(`http://localhost:3000/job/${id}`);
  }

  DeleteJobApi(id: number): Observable<any> {
    return this.httpClient.delete(`http://localhost:3000/job/${id}`);
  }

  ApplyCv(formData: FormData): Observable<any> {
    return this.httpClient.post(
      'http://localhost:3000/resume/apply-cv',
      formData
    );
  }
}
