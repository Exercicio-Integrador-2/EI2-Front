import { Component, resource } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input"; 
import { MatDatepickerModule } from "@angular/material/datepicker"; 
import { MatNativeDateModule } from "@angular/material/core"; 
import { MatButtonModule } from "@angular/material/button"; 
import { MatTableModule } from "@angular/material/table";
import { CommonModule } from '@angular/common';
import { ResourceLogService } from '../../../services/resourcelog.service';
import { ResourceLogCreateDTO } from '../../../models/create/resource-log-create.dto';
import { SelectedEmployeeService } from '../../../services/selectedEmployeeService';
import { EmployeeDTO } from '../../../models/get/employee.dto';
import { firstValueFrom } from 'rxjs';
import { RoomDTO } from '../../../models/get/room.dto';
import { RoomService } from '../../../services/room.service';

@Component({
  selector: 'app-sala',
  standalone: true,
  templateUrl: './sala.html',
  styleUrls: ['./sala.scss'],
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatTableModule,
    CommonModule
  ]
})
export class SalaComponent {
  selectedDate: Date | null = null;
  rooms: any[] = [];
  displayedColumns: string[] = ['name', 'roomNumber', 'capacity', 'projetor', 'status', 'actions'];

  constructor(
    private roomService : RoomService,
    private resourceLogService : ResourceLogService,
    private selectedEmployeeService: SelectedEmployeeService
  ) {}

  async buscarDisponiveis() {
    if (!this.selectedDate) return;

    const dataISO = this.selectedDate.toISOString().split('T')[0];

    (await this.roomService.getByDate(dataISO)).subscribe((rooms: RoomDTO[]) => {
      this.rooms = rooms;
    });
  }

  async reservar(sala: RoomDTO) {
    if (!this.selectedDate) return;

    const employee : EmployeeDTO | null = (await this.selectedEmployeeService.getEmployee());
    console.log(employee);

    if (!employee) return;

    const dataISO = this.selectedDate.toISOString().split('T')[0];

    const resourceLog: ResourceLogCreateDTO = {
      loanDate: dataISO,
      resourceId: sala.id,
      employeeId: employee.enrollmentId
    };

    await firstValueFrom(this.resourceLogService.create(resourceLog));

    // "Reload"
    this.buscarDisponiveis();
  }
}
