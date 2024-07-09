import { SortOrder } from "../../util/SortOrder";

export type ColumnOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  dataType?: SortOrder;
  name?: SortOrder;
  isUnique?: SortOrder;
  isNullable?: SortOrder;
  tableId?: SortOrder;
};
