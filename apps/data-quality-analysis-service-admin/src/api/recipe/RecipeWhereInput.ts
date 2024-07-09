import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AnalysisResultListRelationFilter } from "../analysisResult/AnalysisResultListRelationFilter";
import { RecipeExecutionListRelationFilter } from "../recipeExecution/RecipeExecutionListRelationFilter";

export type RecipeWhereInput = {
  id?: StringFilter;
  steps?: JsonFilter;
  typeField?: "Option1";
  name?: StringNullableFilter;
  analysisResults?: AnalysisResultListRelationFilter;
  recipeExecutions?: RecipeExecutionListRelationFilter;
};
