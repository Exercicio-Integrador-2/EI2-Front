import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatNativeDateModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';

import { ResourceLogService } from '../../../services/resourcelog.service';
import { ResourcesStatusLogDTO } from '../../../models/get/resource-status/resources-status-log.dto';
import { DailyAllocationDTO } from '../../../models/get/resource-status/daily-allocation.dto';
import { ResourceTypeCountDTO } from '../../../models/get/resource-status/resource-type-count.dto';
import { BusyDayDTO } from '../../../models/get/resource-status/busy-day.dto';

@Component({
  selector: 'app-ocorrencias',
  templateUrl: './ocorrencias.html',
  styleUrls: ['./ocorrencias.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule
  ]
})
export class OcorrenciasComponent {

  startDate!: Date;
  endDate!: Date;

  selectedView: 'daily' | 'loaned' | 'busiest' = 'daily';

  dailyAllocationsDataSource = new MatTableDataSource<DailyAllocationDTO>([]);
  resourcesLoanedDataSource = new MatTableDataSource<ResourceTypeCountDTO>([]);
  busiestDaysDataSource = new MatTableDataSource<BusyDayDTO>([]);

  dailyColumns = ['date', 'resourceCount', 'loanedResources'];
  loanedColumns = ['resourceType', 'resourcesCount'];
  busiestColumns = ['dayOfWeek', 'allocationCount'];

  constructor(private resourceLogService: ResourceLogService) {}

  onViewChange(value: 'daily' | 'loaned' | 'busiest') {
    this.selectedView = value;
  }

  fetchData() {
    if (!this.startDate || !this.endDate) return;

    const start = this.startDate.toISOString().substring(0, 10);
    const end = this.endDate.toISOString().substring(0, 10);

    this.resourceLogService.getStatusByDateRange(start, end).then(obs => {
      obs.subscribe((res: ResourcesStatusLogDTO) => {
        this.dailyAllocationsDataSource.data = res.dailyAllocations || [];
        this.resourcesLoanedDataSource.data = res.resourcesLoanedCounts || [];
        this.busiestDaysDataSource.data = res.busiestDays || [];
      });
    });
  }
}
