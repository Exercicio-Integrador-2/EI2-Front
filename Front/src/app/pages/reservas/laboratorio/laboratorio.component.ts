import { Component } from '@angular/core';
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
import { LaboratoryService } from '../../../services/laboratory.service';
import { LaboratoryDTO } from '../../../models/get/laboratory.dto';
import { firstValueFrom } from 'rxjs';
import { SelectedEmployeeService } from '../../../services/selectedEmployeeService';
import { EmployeeDTO } from '../../../models/get/employee.dto';

@Component({
  selector: 'app-laboratory',
  standalone: true,
  templateUrl: './laboratorio.html',
  styleUrls: ['./laboratorio.scss'],
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
export class LaboratorioComponent {
  selectedDate: Date | null = null;
  laboratories: any[] = [];
  displayedColumns: string[] = ['name', 'pcQuantity', 'description', 'status', 'actions'];

  constructor(
    private laboratoryService : LaboratoryService,
    private resourceLogService : ResourceLogService,
    private selectedEmployeeService : SelectedEmployeeService
  ) {}

  async buscarDisponiveis() {
    if (!this.selectedDate) return;

    const dataISO = this.selectedDate.toISOString().split('T')[0];

    (await this.laboratoryService.getByDate(dataISO)).subscribe((laboratories: LaboratoryDTO[]) => {
      this.laboratories = laboratories;
    });
  }

async reservar(laboratory: LaboratoryDTO) {
    if (!this.selectedDate) return;

    const employee : EmployeeDTO | null = (await this.selectedEmployeeService.getEmployee());
    console.log(employee);

    if (!employee) return;

    const dataISO = this.selectedDate.toISOString().split('T')[0];

    const resourceLog: ResourceLogCreateDTO = {
      loanDate: dataISO,
      resourceId: laboratory.id,
      employeeId: employee.enrollmentId
    };

    await firstValueFrom(this.resourceLogService.create(resourceLog));

    // "Reload"
    this.buscarDisponiveis();
  }
}
