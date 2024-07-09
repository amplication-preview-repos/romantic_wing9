import { SortOrder } from "../../util/SortOrder";

export type RecipeExecutionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  executedAt?: SortOrder;
  results?: SortOrder;
  isErrored?: SortOrder;
  recipeId?: SortOrder;
  dataTableId?: SortOrder;
};
