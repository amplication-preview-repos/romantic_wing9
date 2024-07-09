import { SortOrder } from "../../util/SortOrder";

export type TableOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  description?: SortOrder;
  creationDate?: SortOrder;
  lastUpdate?: SortOrder;
  owner?: SortOrder;
  databaseId?: SortOrder;
};
