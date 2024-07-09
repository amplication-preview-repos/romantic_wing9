import { SortOrder } from "../../util/SortOrder";

export type AnalysisResultOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  executionDate?: SortOrder;
  resultData?: SortOrder;
  issuesFound?: SortOrder;
  appliedFilters?: SortOrder;
  tableId?: SortOrder;
  recipeId?: SortOrder;
};
