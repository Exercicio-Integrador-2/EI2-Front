import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { NotebookGerenciamentoComponent } from '../../../shared/gerenciamento/notebook/notebook.component'; 
import { LaboratorioGerenciamentoComponent } from '../../../shared/gerenciamento/laboratorio/laboratorio.component'; 
import { SalaGerenciamentoComponent } from '../../../shared/gerenciamento/sala/sala.component'; 

export const NOTEBOOKS_DATA = [
  { 
    name: 'Dell Latitude 5420', 
    patrimonyNumber: '00123', 
    description: 'Core i5, 16GB RAM, 256GB SSD', 
    acquisitionDate: '15/05/2024' 
  },];
  export const SALAS_DATA = [
  { 
    name: 'Sala de Reuniões Atlântida', 
    roomNumber: 101, 
    capacity: 8, 
    projector: 'Sim' 
  },];
  export const LABS_DATA = [
  { 
    name: 'Laboratório de Redes', 
    pcQuantity: 20, 
    pcDescription: 'Equipado com switches e roteadores Cisco' 
  },];

@Component({
  selector: 'app-pessoal',
  imports: [ MatTableModule, MatIconModule, MatButtonToggleModule, CommonModule],
  templateUrl: './pessoal.html',
  styleUrl: './pessoal.scss'
})
export class PessoalComponent {
  constructor(private dialog: MatDialog) {}
  
    selectedView: string = 'notes'; 
  
    notebooksDataSource = new MatTableDataSource<any>();
    notebooksDisplayedColumns: string[] = ['name', 'patrimonyNumber', 'description', 'acquisitionDate', 'edit'];
  
    salasDataSource = new MatTableDataSource<any>();;
    salasDisplayedColumns: string[] = ['name', 'roomNumber', 'capacity', 'projector', 'edit'];
  
    labsDataSource = new MatTableDataSource<any>();
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
  
    fetchNotebooks() {
      console.log("Buscando dados de Notebooks...");
  
      // dados mockados:
      this.notebooksDataSource.data = NOTEBOOKS_DATA;
    }
  
    fetchSalas() {
      console.log("Buscando dados de Salas...");
      
      // dados mockados:
      this.salasDataSource.data = SALAS_DATA;
    }
  
    fetchLabs() {
      console.log("Buscando dados de Laboratórios...");
      
      // dados mockados:
      this.labsDataSource.data = LABS_DATA;
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
  
