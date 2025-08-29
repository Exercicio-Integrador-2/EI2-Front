import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResourceLogCreateDTO } from '../models/create/resource-log-create.dto';
import { ResourcesStatusLogDTO } from '../models/get/resource-status/resources-status-log.dto';
import { ResourceDTO } from '../models/get/resource.dto';

@Injectable({ providedIn: 'root' })
export class ResourceLogService {
  private baseUrl = 'http://localhost:5178/api/ResourceLog';

  constructor(private http: HttpClient) {}

  async getAll(): Promise<Observable<ResourceDTO[]>> {
    return this.http.get<ResourceDTO[]>(this.baseUrl);
  }

  async create(log: ResourceLogCreateDTO): Promise<Observable<ResourceDTO>> {
    return this.http.post<ResourceDTO>(this.baseUrl, log);
  }

  /**
   * Dates expected as yyyy-MM-dd.
   */
  async getStatusByDateRange(start: string, end: string): Promise<Observable<ResourcesStatusLogDTO>> {
    const s = start?.length > 10 ? start.substring(0, 10) : start;
    const e = end?.length > 10 ? end.substring(0, 10) : end;
    return this.http.get<ResourcesStatusLogDTO>(`${this.baseUrl}/status?startDate=${s}&endDate=${e}`);
  }
}
