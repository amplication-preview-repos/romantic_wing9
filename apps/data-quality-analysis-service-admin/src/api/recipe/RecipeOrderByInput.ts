import { SortOrder } from "../../util/SortOrder";

export type RecipeOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  steps?: SortOrder;
  typeField?: SortOrder;
  name?: SortOrder;
};
