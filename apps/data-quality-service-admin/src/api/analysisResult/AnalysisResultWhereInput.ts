import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { TableWhereUniqueInput } from "../table/TableWhereUniqueInput";
import { RecipeWhereUniqueInput } from "../recipe/RecipeWhereUniqueInput";

export type AnalysisResultWhereInput = {
  id?: StringFilter;
  executionDate?: DateTimeNullableFilter;
  resultData?: JsonFilter;
  issuesFound?: IntNullableFilter;
  appliedFilters?: JsonFilter;
  table?: TableWhereUniqueInput;
  recipe?: RecipeWhereUniqueInput;
};
