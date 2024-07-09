import { SortOrder } from "../../util/SortOrder";

export type AnalysisResultOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  results?: SortOrder;
  recipeId?: SortOrder;
  dataTableId?: SortOrder;
};
