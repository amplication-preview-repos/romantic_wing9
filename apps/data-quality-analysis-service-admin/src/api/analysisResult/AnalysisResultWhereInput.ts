import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { RecipeWhereUniqueInput } from "../recipe/RecipeWhereUniqueInput";
import { DataTableWhereUniqueInput } from "../dataTable/DataTableWhereUniqueInput";

export type AnalysisResultWhereInput = {
  id?: StringFilter;
  results?: JsonFilter;
  recipe?: RecipeWhereUniqueInput;
  dataTable?: DataTableWhereUniqueInput;
};
