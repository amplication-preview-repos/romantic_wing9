import { DataTableWhereUniqueInput } from "../dataTable/DataTableWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type ColumnCreateInput = {
  dataType?: string | null;
  name?: string | null;
  dataTable?: DataTableWhereUniqueInput | null;
  columnStats?: InputJsonValue;
};
