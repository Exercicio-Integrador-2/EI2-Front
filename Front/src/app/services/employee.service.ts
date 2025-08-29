import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeDTO } from '../models/get/employee.dto';

@Injectable({ providedIn: 'root' })
export class EmployeeService {
  private baseUrl = 'http://localhost:5178/api/Employee';

  constructor(private http: HttpClient) {}

  async getAll(): Promise<Observable<EmployeeDTO[]>> {
    return this.http.get<EmployeeDTO[]>(this.baseUrl);
  }
}
