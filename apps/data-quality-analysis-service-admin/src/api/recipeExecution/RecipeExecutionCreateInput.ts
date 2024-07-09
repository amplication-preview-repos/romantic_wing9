import { InputJsonValue } from "../../types";
import { RecipeWhereUniqueInput } from "../recipe/RecipeWhereUniqueInput";
import { DataTableWhereUniqueInput } from "../dataTable/DataTableWhereUniqueInput";

export type RecipeExecutionCreateInput = {
  executedAt?: Date | null;
  results?: InputJsonValue;
  isErrored?: boolean | null;
  recipe?: RecipeWhereUniqueInput | null;
  dataTable?: DataTableWhereUniqueInput | null;
};
