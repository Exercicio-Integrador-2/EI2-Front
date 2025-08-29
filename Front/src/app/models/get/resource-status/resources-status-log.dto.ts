import { DailyAllocationDTO } from './daily-allocation.dto';
import { ResourceTypeCountDTO } from './resource-type-count.dto';
import { BusyDayDTO } from './busy-day.dto';

export interface ResourcesStatusLogDTO {
  dailyAllocations?: DailyAllocationDTO[];
  resourcesLoanedCounts?: ResourceTypeCountDTO[];
  busiestDays?: BusyDayDTO[];
}
