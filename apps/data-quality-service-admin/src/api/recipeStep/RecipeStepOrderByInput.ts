import { SortOrder } from "../../util/SortOrder";

export type RecipeStepOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  order?: SortOrder;
  parameters?: SortOrder;
  qualityRuleId?: SortOrder;
  recipeId?: SortOrder;
};
