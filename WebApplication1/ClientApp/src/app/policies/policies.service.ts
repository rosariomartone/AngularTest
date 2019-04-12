import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Policy } from './policy';

const baseUrl = 'https://localhost:44319';

@Injectable({
  providedIn: 'root'
})
export class PoliciesService {

  constructor(private http: HttpClient) {
  }

  private async request(method: string, url: string, data?: any) {
    const result = this.http.request(method, url, {
      body: data,
      responseType: 'json',
      observe: 'body'
    });
    return new Promise<any>((resolve, reject) => {
      result.subscribe(resolve as any, reject as any);
    });
  }

  getPolicies() {
    return this.request('get', `${baseUrl}/api/Policies`);
  }

  deletePolicy(policyNumber: number) {
    return this.request('delete', `${baseUrl}/api/Policies/Delete/${policyNumber}`);
  }
}
