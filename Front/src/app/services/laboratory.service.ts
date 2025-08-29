import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LaboratoryDTO } from '../models/get/laboratory.dto';
import { LaboratoryCreateDTO } from '../models/create/laboratory-create.dto';

@Injectable({ providedIn: 'root' })
export class LaboratoryService {
  private baseUrl = 'http://localhost:5178/api/Laboratory';

  constructor(private http: HttpClient) {}

  getAll(): Observable<LaboratoryDTO[]> {
    return this.http.get<LaboratoryDTO[]>(this.baseUrl);
  }

  update(lab: LaboratoryCreateDTO): Observable<LaboratoryDTO> {
    return this.http.put<LaboratoryDTO>(this.baseUrl, lab);
  }

  getByDate(date: string): Observable<LaboratoryDTO[]> {
    return this.http.get<LaboratoryDTO[]>(`${this.baseUrl}/date?date=${date}`);
  }

  getById(id: number): Observable<LaboratoryDTO> {
    return this.http.get<LaboratoryDTO>(`${this.baseUrl}/${id}`);
  }
}
