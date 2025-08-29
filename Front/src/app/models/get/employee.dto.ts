export enum Roles {
  Intern = 0,
  Manager = 1,
  Executive = 2,
  CEO = 3,
  CTO = 4
}

export interface EmployeeDTO {
  enrollmentId: number;
  name?: string;
  enrollmentDate: string;
  role: Roles;
  resourcesLoanedId?: number[];
}
