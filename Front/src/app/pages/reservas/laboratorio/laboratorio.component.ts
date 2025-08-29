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
    private resourceLogService : ResourceLogService
  ) {}

  async buscarDisponiveis() {
    if (!this.selectedDate) return;

    const dataISO = this.selectedDate.toISOString().split('T')[0];

    (await this.laboratoryService.getByDate(dataISO)).subscribe((laboratories: LaboratoryDTO[]) => {
      this.laboratories = laboratories;
    });
  }

  async reservar(resourceLog : ResourceLogCreateDTO) {
    if (!this.selectedDate) return;

    const dataISO = this.selectedDate.toISOString().split('T')[0];

    

    // (await this.resourceLogService.create())

    // MOCK temporário ↓
    // console.log(`Reservado ${laboratory.name} (${laboratory.pcQuantity}) para ${dataISO}`);
    this.buscarDisponiveis();
  }
}
