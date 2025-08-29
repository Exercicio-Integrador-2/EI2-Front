import { Component } from '@angular/core';
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
    private resourceLogService : ResourceLogService
  ) {}

  async buscarDisponiveis() {
    if (!this.selectedDate) return;

    const dataISO = this.selectedDate.toISOString().split('T')[0];

    (await this.notebookService.getByDate(dataISO)).subscribe((notebooks: NotebookDTO[]) => {
      this.notebooks = notebooks;
    });
  }

  async reservar(resourceLog : ResourceLogCreateDTO) {
    if (!this.selectedDate) return;

    const dataISO = this.selectedDate.toISOString().split('T')[0];

    (await this.resourceLogService.create())

    // MOCK temporário ↓
    console.log(`Reservado ${notebook.name} (${notebook.patrimonyNumber}) para ${dataISO}`);
    this.buscarDisponiveis();
  }
}
