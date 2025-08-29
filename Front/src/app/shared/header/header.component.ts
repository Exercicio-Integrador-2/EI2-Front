import { Component, OnInit } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EmployeeDTO } from '../../models/get/employee.dto';
import { EmployeeService } from '../../services/employee.service';
import { SelectedEmployeeService } from '../../services/selectedEmployeeService';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  logoPath: string = "assets/img/logo.png";

  employees: EmployeeDTO[] = [];
  selected: EmployeeDTO | null = null;

  constructor(
    private employeeService: EmployeeService,
    private selectedEmployeeService: SelectedEmployeeService
  ) {}

  ngOnInit(): void {
    this.employeeService.getAll().then(obs => {
      obs.subscribe(data => {
        this.employees = data;
      });
    });
  }

  onUserChange(employee: EmployeeDTO) {
    this.selected = employee;
    this.selectedEmployeeService.setEmployee(employee);
  }
}
