import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LaboratoryDTO } from '../models/get/laboratory.dto';
import { LaboratoryCreateDTO } from '../models/create/laboratory-create.dto';

@Injectable({ providedIn: 'root' })
export class LaboratoryService {
  private baseUrl = 'http://localhost:5178/api/Laboratory';

  constructor(private http: HttpClient) {}

  async getAll(): Promise<Observable<LaboratoryDTO[]>> {
    return this.http.get<LaboratoryDTO[]>(this.baseUrl);
  }

  async update(lab: LaboratoryCreateDTO): Promise<Observable<LaboratoryDTO>> {
    return this.http.put<LaboratoryDTO>(this.baseUrl, lab);
  }

  async getByDate(date: string): Promise<Observable<LaboratoryDTO[]>> {
    return this.http.get<LaboratoryDTO[]>(`${this.baseUrl}/date?date=${date}`);
  }

  async getById(id: number): Promise<Observable<LaboratoryDTO>> {
    return this.http.get<LaboratoryDTO>(`${this.baseUrl}/${id}`);
  }
}
