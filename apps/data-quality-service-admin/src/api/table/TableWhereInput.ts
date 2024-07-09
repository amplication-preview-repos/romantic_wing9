import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DatabaseWhereUniqueInput } from "../database/DatabaseWhereUniqueInput";
import { ColumnListRelationFilter } from "../column/ColumnListRelationFilter";
import { AnalysisResultListRelationFilter } from "../analysisResult/AnalysisResultListRelationFilter";

export type TableWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
  creationDate?: DateTimeNullableFilter;
  lastUpdate?: DateTimeNullableFilter;
  owner?: StringNullableFilter;
  database?: DatabaseWhereUniqueInput;
  columns?: ColumnListRelationFilter;
  analysisResults?: AnalysisResultListRelationFilter;
};
