import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NotebookDTO } from '../models/get/notebook.dto';
import { NotebookCreateDTO } from '../models/create/notebook-create.dto';

@Injectable({ providedIn: 'root' })
export class NotebookService {
  private baseUrl = 'http://localhost:5178/api/Notebook';

  constructor(private http: HttpClient) {}

  getAll(): Observable<NotebookDTO[]> {
    return this.http.get<NotebookDTO[]>(this.baseUrl);
  }

  create(notebook: NotebookCreateDTO): Observable<NotebookDTO> {
    return this.http.post<NotebookDTO>(this.baseUrl, notebook);
  }

  update(notebook: NotebookCreateDTO): Observable<NotebookDTO> {
    return this.http.put<NotebookDTO>(this.baseUrl, notebook);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  getByDate(date: string): Observable<NotebookDTO[]> {
    return this.http.get<NotebookDTO[]>(`${this.baseUrl}/date?date=${date}`);
  }

  getById(id: number): Observable<NotebookDTO> {
    return this.http.get<NotebookDTO>(`${this.baseUrl}/${id}`);
  }
}
