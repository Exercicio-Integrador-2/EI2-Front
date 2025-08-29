export interface NotebookDTO {
  id: number;
  name?: string;
  resourceType?: string;
  bookedDates?: string[];
  description?: string;
  patrimonyNumber: number;
  acquisitionDate: string;
}
