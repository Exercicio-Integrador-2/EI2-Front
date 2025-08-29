export interface RoomDTO {
  id: number;
  name?: string;
  resourceType?: string;
  bookedDates?: string[];
  roomNumber: number;
  capacity: number;
  projector: boolean;
}
