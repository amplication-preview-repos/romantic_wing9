import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { RecipeStepListRelationFilter } from "../recipeStep/RecipeStepListRelationFilter";
import { AnalysisResultListRelationFilter } from "../analysisResult/AnalysisResultListRelationFilter";

export type RecipeWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  creationDate?: DateTimeNullableFilter;
  name?: StringNullableFilter;
  owner?: StringNullableFilter;
  recipeSteps?: RecipeStepListRelationFilter;
  analysisResults?: AnalysisResultListRelationFilter;
};
