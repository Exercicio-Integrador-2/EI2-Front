import { Component } from '@angular/core';

import { EmployeeDTO } from '../../models/get/employee.dto';
import { LaboratoryDTO } from '../../models/get/laboratory.dto';
import { NotebookDTO } from '../../models/get/notebook.dto';
import { ResourceDTO } from '../../models/get/resource.dto';
import { RoomDTO } from '../../models/get/room.dto';

import { NotebookCreateDTO } from '../../models/create/notebook-create.dto';

import { EmployeeService } from '../../services/employee.service';
import { NotebookService } from '../../services/notebook.service';
import { LaboratoryService } from '../../services/laboratory.service';
import { ResourceService } from '../../services/resource.service';
import { ResourceLogService } from '../../services/resourcelog.service';
import { RoomService } from '../../services/room.service';
import { CommonModule } from '@angular/common';
import { ResourcesStatusLogDTO } from '../../models/get/resource-status/resources-status-log.dto';
import { FormsModule } from '@angular/forms';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-test-services',
  templateUrl: './test-services.component.html',
  styleUrls: ['./test-services.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class TestServicesComponent {
  employees: EmployeeDTO[] = [];
  laboratories: LaboratoryDTO[] = [];
  notebooks: NotebookDTO[] = [];
  resources: ResourceDTO[] = [];
  rooms: RoomDTO[] = [];

  // For Notebook CRUD
  newNotebook: NotebookCreateDTO = {
    name: 'Test Notebook',
    description: 'Created for testing',
    patrimonyNumber: 12345,
    acquisitionDate: new Date().toISOString()
  };
  createdNotebook?: NotebookDTO;
  updatedNotebook?: NotebookDTO;

  resourceStatus?: ResourcesStatusLogDTO;
  statusStartDate = '';
  statusEndDate = '';
  loadingResourceStatus = false;
  resourceStatusError?: string;

  private normalizeDate(d: string): string | undefined {
    if (!d) return undefined;
    // If already yyyy-MM-dd just return
    if (/^\d{4}-\d{2}-\d{2}$/.test(d)) return d;
    // Try to parse
    const dateObj = new Date(d);
    if (isNaN(dateObj.getTime())) return undefined;
    return dateObj.toISOString().substring(0, 10);
  }

  constructor(
    private employeeService: EmployeeService,
    private laboratoryService: LaboratoryService,
    private notebookService: NotebookService,
    private resourceService: ResourceService,
    private resourceLogService: ResourceLogService,
    private roomService: RoomService
  ) {}

  ngOnInit() {
    this.employeeService.getAll().subscribe(data => this.employees = data);
    this.laboratoryService.getAll().subscribe(data => this.laboratories = data);
    this.notebookService.getAll().subscribe(data => this.notebooks = data);
    this.resourceService.getAll().subscribe(data => this.resources = data);
    this.roomService.getAll().subscribe(data => this.rooms = data);
  }

  createNotebook() {
    this.notebookService.create(this.newNotebook).subscribe(data => this.createdNotebook = data);
  }

  updateNotebook() {
    if (this.createdNotebook) {
      const updated: NotebookCreateDTO = {
        ...this.newNotebook,
        name: 'Updated Notebook'
      };
      this.notebookService.update(updated).subscribe(data => this.updatedNotebook = data);
    }
  }

  deleteNotebook() {
    if (this.createdNotebook) {
      this.notebookService.delete(this.createdNotebook.id).subscribe(() => {
        this.createdNotebook = undefined;
        this.updatedNotebook = undefined;
      });
    }
  }

  loadResourceStatus() {
    this.resourceStatusError = undefined;
    this.resourceStatus = undefined;

    const start = this.normalizeDate(this.statusStartDate || '');
    const end = this.normalizeDate(this.statusEndDate || '');

    if (!start || !end) {
      this.loadingResourceStatus = false;
      this.resourceStatusError = 'Both start date and end date are required.';
      return;
    }
    if (start > end) {
      this.loadingResourceStatus = false;
      this.resourceStatusError = 'Start date must be before or equal to end date.';
      return;
    }

    this.loadingResourceStatus = true;
    this.resourceLogService.getStatusByDateRange(start, end)
      .pipe(finalize(() => this.loadingResourceStatus = false))
      .subscribe({
        next: (data: ResourcesStatusLogDTO) => this.resourceStatus = data,
        error: (err: any) => this.resourceStatusError = err?.message || 'Failed to load resource status'
      });
  }
}
