import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EmployeeDTO } from '../models/get/employee.dto';

@Injectable({
  providedIn: 'root'
})
export class SelectedEmployeeService {
  private employeeSource = new BehaviorSubject<EmployeeDTO | null>(null);
  currentEmployee$ = this.employeeSource.asObservable();

  setEmployee(employee: EmployeeDTO) {
    this.employeeSource.next(employee);
  }

  getEmployee(): EmployeeDTO | null {
    return this.employeeSource.value;
  }
}
