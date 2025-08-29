import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NotebookGerenciamentoComponent } from '../../../shared/gerenciamento/notebook/notebook.component'; 
import { LaboratorioGerenciamentoComponent } from '../../../shared/gerenciamento/laboratorio/laboratorio.component'; 
import { SalaGerenciamentoComponent } from '../../../shared/gerenciamento/sala/sala.component'; 
import { ResourceService } from '../../../services/resource.service';
import { NotebookDTO } from '../../../models/get/notebook.dto';
import { RoomDTO } from '../../../models/get/room.dto';
import { LaboratoryDTO } from '../../../models/get/laboratory.dto';
import { ResourceDTO } from '../../../models/get/resource.dto';
import { NotebookService } from '../../../services/notebook.service';
import { LaboratoryService } from '../../../services/laboratory.service';
import { RoomService } from '../../../services/room.service';

@Component({
  selector: 'app-geral',
  imports: [ MatTableModule, MatIconModule, MatButtonToggleModule, CommonModule],
  templateUrl: './geral.html',
  styleUrl: './geral.scss'
})
export class GeralComponent{  
  constructor(
    private dialog: MatDialog,
    private notebookService : NotebookService,
    private laboratoryService : LaboratoryService,
    private roomService : RoomService
  ) {}

  selectedView: string = 'notes'; 

  notebooksDataSource = new MatTableDataSource<NotebookDTO>();
  notebooksDisplayedColumns: string[] = ['name', 'patrimonyNumber', 'description', 'acquisitionDate', 'edit'];

  salasDataSource = new MatTableDataSource<RoomDTO>();
  salasDisplayedColumns: string[] = ['name', 'roomNumber', 'capacity', 'projector', 'edit'];

  labsDataSource = new MatTableDataSource<LaboratoryDTO>();
  labsDisplayedColumns: string[] = ['name', 'pcQuantity', 'pcDescription', 'edit'];


  ngOnInit() {
    this.fetchNotebooks();
  }

  onViewChange(view: string) {
    this.selectedView = view;
    
    // Carrega os dados correspondentes à nova visão
    switch (view) {
      case 'notes':
        this.fetchNotebooks();
        break;
      case 'salas':
        this.fetchSalas();
        break;
      case 'labs':
        this.fetchLabs();
        break;
    }
  }

  
  async fetchNotebooks() {
    (await this.notebookService.getAll()).subscribe((data: NotebookDTO[]) => {
      this.notebooksDataSource.data = data;
    });
  }

  async fetchSalas() {
    (await this.roomService.getAll()).subscribe((data: RoomDTO[]) => {
      this.salasDataSource.data = data;
    });
  }

  async fetchLabs() {
    (await this.laboratoryService.getAll()).subscribe((data: LaboratoryDTO[]) => {
      this.labsDataSource.data = data;
    });
  }


  editItem(element: any, type: string) {
    let dialogRef;

    switch (type) {
      case 'notes':
        dialogRef = this.dialog.open(NotebookGerenciamentoComponent, {
          width: '700px',
          data: element // Passa os dados do notebook para o modal
        });
        break;
      
      case 'salas':
         dialogRef = this.dialog.open(SalaGerenciamentoComponent, {
          width: '700px',
          data: element // Passa os dados do notebook para o modal
        });
        break;

      case 'labs':
         dialogRef = this.dialog.open(LaboratorioGerenciamentoComponent, {
          width: '700px',
          data: element // Passa os dados do notebook para o modal
        });

        break;
    }
  }
}
