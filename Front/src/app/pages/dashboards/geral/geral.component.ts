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
    nome: 'Dell Latitude 5420', 
    patrimonio: 'NTB00123', 
    desc: 'Core i5, 16GB RAM, 256GB SSD', 
    data: '15/05/2024' 
  },
  { 
    nome: 'HP Probook 440 G8', 
    patrimonio: 'NTB00124', 
    desc: 'Ryzen 5, 8GB RAM, 512GB SSD', 
    data: '22/08/2024' 
  },
  { 
    nome: 'Lenovo ThinkPad T14', 
    patrimonio: 'NTB00125', 
    desc: 'Core i7, 16GB RAM, 1TB SSD', 
    data: '10/01/2025' 
  },
  { 
    nome: 'MacBook Air M2', 
    patrimonio: 'NTB00126', 
    desc: 'Chip M2, 8GB RAM, 256GB SSD', 
    data: '05/03/2025' 
  },
];

export const SALAS_DATA = [
  { 
    nome: 'Sala de Reuniões Atlântida', 
    num: 101, 
    capacidade: 8, 
    projetor: 'Sim' 
  },
  { 
    nome: 'Sala de Foco 1', 
    num: 102, 
    capacidade: 4, 
    projetor: 'Não' 
  },
  { 
    nome: 'Sala de Treinamento Alfa', 
    num: 205, 
    capacidade: 20, 
    projetor: 'Sim' 
  },
  { 
    nome: 'Auditório Beta', 
    num: 310, 
    capacidade: 50, 
    projetor: 'Sim' 
  },
];

export const LABS_DATA = [
  { 
    nome: 'Laboratório de Redes', 
    qtd_pc: 20, 
    desc: 'Equipado com switches e roteadores Cisco' 
  },
  { 
    nome: 'Laboratório de Hardware', 
    qtd_pc: 15, 
    desc: 'Bancadas com fontes, osciloscópios e multímetros' 
  },
  { 
    nome: 'Laboratório de Programação', 
    qtd_pc: 25, 
    desc: 'Computadores com múltiplos IDEs e compiladores' 
  },
  { 
    nome: 'Laboratório de Design Gráfico', 
    qtd_pc: 18, 
    desc: 'iMacs com suíte Adobe Creative Cloud instalada' 
  },
];

@Component({
  selector: 'app-geral',
  imports: [ MatTableModule, MatIconModule, MatButtonToggleModule, CommonModule],
  templateUrl: './geral.html',
  styleUrl: './geral.scss'
})
export class GeralComponent{  
  constructor(private dialog: MatDialog) {}

  selectedView: string = 'notes'; 

  notebooksDataSource = new MatTableDataSource<any>();
  notebooksDisplayedColumns: string[] = ['nome', 'patrimonio', 'desc', 'data', 'edit'];

  salasDataSource = new MatTableDataSource<any>();;
  salasDisplayedColumns: string[] = ['nome', 'num', 'capacidade', 'projetor', 'edit'];

  labsDataSource = new MatTableDataSource<any>();
  labsDisplayedColumns: string[] = ['nome', 'qtd_pc', 'desc', 'edit'];


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
