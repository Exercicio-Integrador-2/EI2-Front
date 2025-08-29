import { Component, Inject  } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { MatCard, MatCardModule } from "@angular/material/card";
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-cria-notebook',
  imports:  [CommonModule, MatNativeDateModule, MatDatepickerModule, MatInputModule, MatFormFieldModule, FormsModule, MatCard, MatCardModule, MatButtonModule, MatDividerModule, MatIconModule ],
  templateUrl: './cria-notebook.html',
  styleUrl: './cria-notebook.scss'
})
export class CriaNotebookComponent {
  createData: any = {
    name: '',
    patrimonyNumber: '',
    description: '',
    data: ''
  };

  onCreate(): void {
    console.log('criacao: ', this.createData);
  }
}
