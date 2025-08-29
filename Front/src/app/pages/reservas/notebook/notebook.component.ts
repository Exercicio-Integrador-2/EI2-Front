import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input"; 
import { MatDatepickerModule } from "@angular/material/datepicker"; 
import { MatNativeDateModule } from "@angular/material/core"; 
import { MatButtonModule } from "@angular/material/button"; 
import { MatTableModule } from "@angular/material/table";

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
    MatTableModule
  ]
})
export class NotebookComponent {
  selectedDate: Date | null = null;
  notebooks: any[] = [];
  displayedColumns: string[] = ['name', 'patrimonyNumber', 'description', 'status', 'actions'];

  constructor(
    // private reservaService: ReservaService   // ← descomentar e injetar quando integrar
  ) {}

  buscarDisponiveis() {
    if (!this.selectedDate) return;

    const dataISO = this.selectedDate.toISOString().split('T')[0];

    // chamada real pro backend
    /*
    this.reservaService.getDisponiveisPorData(dataISO).subscribe({
      next: (data) => this.notebooks = data,
      error: (err) => console.error('Erro ao carregar notebooks', err)
    });
    */

    // MOCK temporário ↓
    this.notebooks = [
      { name: 'Dell Inspiron', patrimonyNumber: '123', description: 'Notebook de testes' },
      { name: 'Lenovo ThinkPad', patrimonyNumber: '456', description: 'Notebook de trabalho' },
      { name: 'Acer Aspire', patrimonyNumber: '789', description: 'Notebook reserva' },
    ];
  }

  reservar(notebook: any) {
    if (!this.selectedDate) return;

    const dataISO = this.selectedDate.toISOString().split('T')[0];

    // chamada real pro backend
    /*
    this.reservaService.reservarNotebook(notebook.id, dataISO).subscribe({
      next: () => this.buscarDisponiveis(),
      error: (err) => console.error('Erro ao reservar', err)
    });
    */

    // MOCK temporário ↓
    console.log(`Reservado ${notebook.name} (${notebook.patrimonyNumber}) para ${dataISO}`);
    this.buscarDisponiveis();
  }
}
