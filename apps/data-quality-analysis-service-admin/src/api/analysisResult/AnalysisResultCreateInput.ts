import { InputJsonValue } from "../../types";
import { RecipeWhereUniqueInput } from "../recipe/RecipeWhereUniqueInput";
import { DataTableWhereUniqueInput } from "../dataTable/DataTableWhereUniqueInput";

export type AnalysisResultCreateInput = {
  results?: InputJsonValue;
  recipe?: RecipeWhereUniqueInput | null;
  dataTable?: DataTableWhereUniqueInput | null;
};
