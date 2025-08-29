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
import { RoomService } from '../../../services/room.service';


@Component({
  selector: 'app-sala',
  imports: [MatCheckboxModule, MatInputModule, MatFormFieldModule, FormsModule, MatCard, MatCardModule, MatButtonModule, MatDividerModule, MatIconModule ],
  templateUrl: './sala.html',
  styleUrl: './sala.scss'
})
export class SalaGerenciamentoComponent {
  editableData: any;

   constructor(
    public dialogRef: MatDialogRef<SalaGerenciamentoComponent>, 
    private roomService: RoomService,
    @Inject(MAT_DIALOG_DATA) public data: any 
  ) {
    //cria um cópia
    this.editableData = { ...data };

  }

  onSave(): void {
    this.roomService.update(this.editableData).subscribe(
      response => {
        console.log('Sala atualizada com sucesso:', response);
        this.dialogRef.close(this.editableData);
      },
      error => {
        console.error('Erro ao atualizar sala:', error);
      }
    );
  }
  
}
