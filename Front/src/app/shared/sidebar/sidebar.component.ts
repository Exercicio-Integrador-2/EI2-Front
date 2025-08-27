import { Component } from '@angular/core';

// Angular Material — CORRETO:
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  imports: [
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatIconModule
  ]
})
export class SidebarComponent {}

