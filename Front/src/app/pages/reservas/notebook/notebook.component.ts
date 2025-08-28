import { Component } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';

@Component({
  selector: 'app-notebook',
  imports: [MatProgressBarModule, MatCardModule, MatChipsModule],
  templateUrl: './notebook.html',
  styleUrl: './notebook.scss'
})
export class NotebookComponent {
  longText = 'lasidjaiugfewijugffffffffffffffffffffffffffffffffffffffffrijgbreiuhgreihju'
}
