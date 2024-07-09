import { SortOrder } from "../../util/SortOrder";

export type RecipeSequenceOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  recipes?: SortOrder;
};
