import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DataTableWhereUniqueInput } from "../dataTable/DataTableWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";

export type ColumnWhereInput = {
  id?: StringFilter;
  dataType?: StringNullableFilter;
  name?: StringNullableFilter;
  dataTable?: DataTableWhereUniqueInput;
  columnStats?: JsonFilter;
};
