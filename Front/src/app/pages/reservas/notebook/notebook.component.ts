import { Component, resource } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input"; 
import { MatDatepickerModule } from "@angular/material/datepicker"; 
import { MatNativeDateModule } from "@angular/material/core"; 
import { MatButtonModule } from "@angular/material/button"; 
import { MatTableModule } from "@angular/material/table";
import { CommonModule } from '@angular/common';
import { NotebookService } from '../../../services/notebook.service';
import { NotebookDTO } from '../../../models/get/notebook.dto';
import { ResourceLogService } from '../../../services/resourcelog.service';
import { ResourceLogCreateDTO } from '../../../models/create/resource-log-create.dto';
import { SelectedEmployeeService } from '../../../services/selectedEmployeeService';
import { EmployeeDTO } from '../../../models/get/employee.dto';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-notebook',
  standalone: true,
  templateUrl: './notebook.html',
  styleUrls: ['./notebook.scss'],
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
export class NotebookComponent {
  selectedDate: Date | null = null;
  notebooks: any[] = [];
  displayedColumns: string[] = ['name', 'patrimonyNumber', 'description', 'status', 'actions'];

  constructor(
    private notebookService : NotebookService,
    private resourceLogService : ResourceLogService,
    private selectedEmployeeService: SelectedEmployeeService
  ) {}

  async buscarDisponiveis() {
    if (!this.selectedDate) return;

    const dataISO = this.selectedDate.toISOString().split('T')[0];

    (await this.notebookService.getByDate(dataISO)).subscribe((notebooks: NotebookDTO[]) => {
      this.notebooks = notebooks;
    });
  }

  async reservar(notebook: NotebookDTO) {
    if (!this.selectedDate) return;

    const employee : EmployeeDTO | null = (await this.selectedEmployeeService.getEmployee());
    console.log(employee);

    if (!employee) return;

    const dataISO = this.selectedDate.toISOString().split('T')[0];

    const resourceLog: ResourceLogCreateDTO = {
      loanDate: dataISO,
      resourceId: notebook.id,
      employeeId: employee.enrollmentId
    };

    await firstValueFrom(this.resourceLogService.create(resourceLog));

    // "Reload"
    this.buscarDisponiveis();
  }
}
