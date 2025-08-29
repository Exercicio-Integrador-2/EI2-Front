import { ResourceDTO } from '../resource.dto';

export interface DailyAllocationDTO {
  date: string;
  resourceCount: number;
  loanedResources?: ResourceDTO[];
}
