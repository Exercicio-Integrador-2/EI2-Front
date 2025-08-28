import { Component } from '@angular/core';

// Angular Material
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

// Angular Router
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  imports: [
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatIconModule,
    RouterModule   // <- necessário para o routerLink funcionar
  ]
})
export class SidebarComponent {}
