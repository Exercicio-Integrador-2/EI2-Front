import { Routes } from '@angular/router';
import { NotebookComponent } from './pages/reservas/notebook/notebook.component';
import { SalaComponent } from './pages/reservas/sala/sala.component';
import { LaboratorioComponent } from './pages/reservas/laboratorio/laboratorio.component';
import { GeralComponent } from './pages/dashboards/geral/geral.component';
import { PessoalComponent } from './pages/dashboards/pessoal/pessoal.component';
import { NotebookGerenciamentoComponent } from './shared/gerenciamento/notebook/notebook.component';
import { SalaGerenciamentoComponent } from './shared/gerenciamento/sala/sala.component';
import { LaboratorioGerenciamentoComponent } from './shared/gerenciamento/laboratorio/laboratorio.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // raiz = home

    { path: 'reservas/notebook', component: NotebookComponent },
    { path: 'reservas/sala', component: SalaComponent },
    { path: 'reservas/laboratorio', component: LaboratorioComponent },

    { path: 'dashboards/geral', component: GeralComponent },
    { path: 'dashboards/pessoal', component: PessoalComponent },

    { path: 'gerenciamento/notebook', component: NotebookGerenciamentoComponent },

    // Página não encontrada
    { path: '**', redirectTo: '' }
];

