export interface LaboratoryDTO {
  id: number;
  name?: string;
  resourceType?: string;
  bookedDates?: string[];
  pcQuantity: number;
  pcDescription?: string;
}
