import { InputJsonValue } from "../../types";
import { TableWhereUniqueInput } from "../table/TableWhereUniqueInput";
import { RecipeWhereUniqueInput } from "../recipe/RecipeWhereUniqueInput";

export type AnalysisResultUpdateInput = {
  executionDate?: Date | null;
  resultData?: InputJsonValue;
  issuesFound?: number | null;
  appliedFilters?: InputJsonValue;
  table?: TableWhereUniqueInput | null;
  recipe?: RecipeWhereUniqueInput | null;
};
