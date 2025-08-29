import { Component, Inject } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { MatCard, MatCardModule } from "@angular/material/card";
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-sala',
  imports: [MatCheckboxModule, MatInputModule, MatFormFieldModule, FormsModule, MatCard, MatCardModule, MatButtonModule, MatDividerModule, MatIconModule ],
  templateUrl: './sala.html',
  styleUrl: './sala.scss'
})
export class SalaGerenciamentoComponent {
  editableData: any;
  projetorChecked: boolean;

   constructor(
    public dialogRef: MatDialogRef<SalaGerenciamentoComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any 
  ) {
    //cria um cópia
    this.editableData = { ...data };
    
    this.projetorChecked = this.editableData.projetor === 'Sim';
  }

  onSave(): void {
    this.editableData.projetor = this.projetorChecked ? 'Sim' : 'Não';
    //retorna os dados novos
    this.dialogRef.close(this.editableData);
  }
  
}
