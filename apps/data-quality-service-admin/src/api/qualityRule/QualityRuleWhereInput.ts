import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RecipeStepListRelationFilter } from "../recipeStep/RecipeStepListRelationFilter";

export type QualityRuleWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
  ruleType?: "Option1";
  script?: StringNullableFilter;
  recipeSteps?: RecipeStepListRelationFilter;
};
