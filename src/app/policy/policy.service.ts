import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Policy } from  '../shared/policy';
import { Observable } from  'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  constructor(private httpClient: HttpClient) { }

  PHP_API_SERVER = "http://127.0.0.1:80";

  readPolicies(): Observable<Policy[]>{
    return this.httpClient.get<Policy[]>(`${this.PHP_API_SERVER}/backend/read.php`);
  }
  createPolicy(policy: Policy): Observable<Policy>{
    return this.httpClient.post<Policy>(`${this.PHP_API_SERVER}/backend/create.php`, policy);
  }
  updatePolicy(policy: Policy){
    return this.httpClient.put<Policy>(`${this.PHP_API_SERVER}/backend/update.php`, policy);
  }
  deletePolicy(id: number){
    return this.httpClient.delete<Policy>(`${this.PHP_API_SERVER}/backend/delete.php/?id=${id}`);
  }
}
