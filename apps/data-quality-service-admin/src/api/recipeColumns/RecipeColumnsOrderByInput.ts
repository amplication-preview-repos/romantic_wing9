import { SortOrder } from "../../util/SortOrder";

export type RecipeColumnsOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  recipeStepId?: SortOrder;
  columnId?: SortOrder;
};
