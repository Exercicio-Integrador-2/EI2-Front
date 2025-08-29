import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResourceDTO } from '../models/get/resource.dto';

@Injectable({ providedIn: 'root' })
export class ResourceService {
  private baseUrl = 'http://localhost:5178/api/Resource';

  constructor(private http: HttpClient) {}

  async getAll(): Promise<Observable<ResourceDTO[]>> {
    return this.http.get<ResourceDTO[]>(this.baseUrl);
  }
}
