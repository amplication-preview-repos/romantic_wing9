import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TableListRelationFilter } from "../table/TableListRelationFilter";

export type DatabaseWhereInput = {
  id?: StringFilter;
  connectionDetails?: JsonFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
  typeField?: "Option1";
  tables?: TableListRelationFilter;
};
