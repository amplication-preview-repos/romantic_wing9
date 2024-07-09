import { InputJsonValue } from "../../types";
import { QualityRuleWhereUniqueInput } from "../qualityRule/QualityRuleWhereUniqueInput";
import { RecipeWhereUniqueInput } from "../recipe/RecipeWhereUniqueInput";
import { RecipeColumnsUpdateManyWithoutRecipeStepsInput } from "./RecipeColumnsUpdateManyWithoutRecipeStepsInput";

export type RecipeStepUpdateInput = {
  order?: number | null;
  parameters?: InputJsonValue;
  qualityRule?: QualityRuleWhereUniqueInput | null;
  recipe?: RecipeWhereUniqueInput | null;
  recipeColumnsItems?: RecipeColumnsUpdateManyWithoutRecipeStepsInput;
};
