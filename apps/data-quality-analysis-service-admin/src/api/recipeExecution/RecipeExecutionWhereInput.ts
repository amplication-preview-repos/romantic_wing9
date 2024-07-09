import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { RecipeWhereUniqueInput } from "../recipe/RecipeWhereUniqueInput";
import { DataTableWhereUniqueInput } from "../dataTable/DataTableWhereUniqueInput";

export type RecipeExecutionWhereInput = {
  id?: StringFilter;
  executedAt?: DateTimeNullableFilter;
  results?: JsonFilter;
  isErrored?: BooleanNullableFilter;
  recipe?: RecipeWhereUniqueInput;
  dataTable?: DataTableWhereUniqueInput;
};
