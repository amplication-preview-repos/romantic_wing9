import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ColumnListRelationFilter } from "../column/ColumnListRelationFilter";
import { AnalysisResultListRelationFilter } from "../analysisResult/AnalysisResultListRelationFilter";
import { RecipeExecutionListRelationFilter } from "../recipeExecution/RecipeExecutionListRelationFilter";

export type DataTableWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  name?: StringNullableFilter;
  columns?: ColumnListRelationFilter;
  analysisResults?: AnalysisResultListRelationFilter;
  recipeExecutions?: RecipeExecutionListRelationFilter;
};
