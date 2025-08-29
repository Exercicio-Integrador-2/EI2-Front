import { Component, Inject } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { MatCard, MatCardModule } from "@angular/material/card";
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-laboratorio',
  imports: [MatInputModule, MatFormFieldModule, FormsModule, MatCard, MatCardModule, MatButtonModule, MatDividerModule, MatIconModule ],
  templateUrl: './laboratorio.html',
  styleUrl: './laboratorio.scss'
})
export class LaboratorioGerenciamentoComponent {
  editableData: any;

   constructor(
    public dialogRef: MatDialogRef<LaboratorioGerenciamentoComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any 
  ) {
    //cria um cópia
    this.editableData = { ...data };
  }

  onSave(): void {
    //retorna os dados novos
    this.dialogRef.close(this.editableData);
  }
}
