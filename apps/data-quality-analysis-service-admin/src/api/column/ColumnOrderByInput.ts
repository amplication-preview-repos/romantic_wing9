import { SortOrder } from "../../util/SortOrder";

export type ColumnOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  dataType?: SortOrder;
  name?: SortOrder;
  dataTableId?: SortOrder;
  columnStats?: SortOrder;
};
