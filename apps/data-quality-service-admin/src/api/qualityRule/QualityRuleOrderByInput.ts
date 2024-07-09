import { SortOrder } from "../../util/SortOrder";

export type QualityRuleOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  description?: SortOrder;
  ruleType?: SortOrder;
  script?: SortOrder;
};
