import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { MatCard, MatCardModule } from "@angular/material/card";
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notebook',
  imports: [CommonModule, MatInputModule, MatFormFieldModule, FormsModule, MatCard, MatCardModule, MatButtonModule, MatDividerModule, MatIconModule ],
  templateUrl: './notebook.html',
  styleUrl: './notebook.scss'
})

export class NotebookGerenciamentoComponent {
  editableData: any;
  
}
