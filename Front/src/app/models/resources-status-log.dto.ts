import { DailyAllocationDTO } from './get/resource-status/daily-allocation.dto';
import { ResourceTypeCountDTO } from './get/resource-status/resource-type-count.dto';
import { BusyDayDTO } from './get/resource-status/busy-day.dto';

export interface ResourcesStatusLogDTO {
  dailyAllocations?: DailyAllocationDTO[];
  resourcesLoanedCounts?: ResourceTypeCountDTO[];
  busiestDays?: BusyDayDTO[];
}
