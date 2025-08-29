import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RoomDTO } from '../models/get/room.dto';
import { RoomCreateDTO } from '../models/create/room-create.dto';

@Injectable({ providedIn: 'root' })
export class RoomService {
  private baseUrl = 'http://localhost:5178/api/Room';

  constructor(private http: HttpClient) {}

  getAll(): Observable<RoomDTO[]> {
    return this.http.get<RoomDTO[]>(this.baseUrl);
  }

  update(room: RoomCreateDTO): Observable<RoomDTO> {
    return this.http.put<RoomDTO>(this.baseUrl, room);
  }

  getByDate(date: string): Observable<RoomDTO[]> {
    return this.http.get<RoomDTO[]>(`${this.baseUrl}/date?date=${date}`);
  }

  getById(id: number): Observable<RoomDTO> {
    return this.http.get<RoomDTO>(`${this.baseUrl}/${id}`);
  }
}
