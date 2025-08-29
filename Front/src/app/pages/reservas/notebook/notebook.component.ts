// reserva-notebooks.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

// Angular Material
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";

interface Notebook {
  description: string;
  patrimonyNumber: number;
  acquisitionDate: string;
  id: number;
  name: string;
  resourceType: string;
  bookedDates: string[];
}

@Component({
  selector: 'app-reserva-notebooks',
  standalone: true,
  templateUrl: './notebook.html',
  styleUrls: ['./notebook.scss'],
  imports: [
    CommonModule,
    FormsModule,

    // Angular Material
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatTableModule,
  ]
})
export class NotebookComponent implements OnInit {
  notebooks: Notebook[] = [];
  selectedDate: Date | null = null;
  displayedColumns = ['name', 'patrimonyNumber', 'description', 'status', 'actions'];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // MOCK: poderia vir do backend com HttpClient
    this.notebooks = [
      {
        description: "Standard user notebook",
        patrimonyNumber: 1234,
        acquisitionDate: "2023-08-28T14:53:10.9044804",
        id: 5,
        name: "Notebook Inspiron 15",
        resourceType: "Notebook",
        bookedDates: ["2025-08-17T14:53:11.0235085"]
      },
      {
        description: "High-performance notebook",
        patrimonyNumber: 4321,
        acquisitionDate: "2024-08-28T14:53:10.904501",
        id: 6,
        name: "Notebook Gamer G15",
        resourceType: "Notebook",
        bookedDates: ["2025-08-23T14:53:11.0235701"]
      },
      {
        description: "Corporate notebook",
        patrimonyNumber: 5678,
        acquisitionDate: "2024-08-28T14:53:10.9045012",
        id: 7,
        name: "Notebook Latitude 3550",
        resourceType: "Notebook",
        bookedDates: []
      },
      {
        description: "Developer notebook",
        patrimonyNumber: 8765,
        acquisitionDate: "2024-08-28T14:53:10.9045013",
        id: 8,
        name: "Notebook Inspiron 16 Plus",
        resourceType: "Notebook",
        bookedDates: []
      }
    ];
  }

  isBookedOnDate(notebook: Notebook): boolean {
    if (!this.selectedDate) return false;
    return notebook.bookedDates.some(dateStr => {
      const bookedDate = new Date(dateStr);
      return bookedDate.toDateString() === this.selectedDate!.toDateString();
    });
  }

  reservar(notebook: Notebook) {
    if (!this.selectedDate) return;

    // MOCK: simula envio pro backend e já marca no array local
    notebook.bookedDates.push(this.selectedDate.toISOString());

    console.log(`✅ Reservado: ${notebook.name} para ${this.selectedDate.toDateString()}`);
  }
}
