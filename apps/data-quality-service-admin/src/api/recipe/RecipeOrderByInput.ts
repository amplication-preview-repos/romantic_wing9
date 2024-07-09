import { SortOrder } from "../../util/SortOrder";

export type RecipeOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  description?: SortOrder;
  creationDate?: SortOrder;
  name?: SortOrder;
  owner?: SortOrder;
};
