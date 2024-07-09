import { InputJsonValue } from "../../types";
import { QualityRuleWhereUniqueInput } from "../qualityRule/QualityRuleWhereUniqueInput";
import { RecipeWhereUniqueInput } from "../recipe/RecipeWhereUniqueInput";
import { RecipeColumnsCreateNestedManyWithoutRecipeStepsInput } from "./RecipeColumnsCreateNestedManyWithoutRecipeStepsInput";

export type RecipeStepCreateInput = {
  order?: number | null;
  parameters?: InputJsonValue;
  qualityRule?: QualityRuleWhereUniqueInput | null;
  recipe?: RecipeWhereUniqueInput | null;
  recipeColumnsItems?: RecipeColumnsCreateNestedManyWithoutRecipeStepsInput;
};
