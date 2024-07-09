import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { QualityRuleWhereUniqueInput } from "../qualityRule/QualityRuleWhereUniqueInput";
import { RecipeWhereUniqueInput } from "../recipe/RecipeWhereUniqueInput";
import { RecipeColumnsListRelationFilter } from "../recipeColumns/RecipeColumnsListRelationFilter";

export type RecipeStepWhereInput = {
  id?: StringFilter;
  order?: IntNullableFilter;
  parameters?: JsonFilter;
  qualityRule?: QualityRuleWhereUniqueInput;
  recipe?: RecipeWhereUniqueInput;
  recipeColumnsItems?: RecipeColumnsListRelationFilter;
};
