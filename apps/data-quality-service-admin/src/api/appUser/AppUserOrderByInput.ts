import { SortOrder } from "../../util/SortOrder";

export type AppUserOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  roles?: SortOrder;
};
