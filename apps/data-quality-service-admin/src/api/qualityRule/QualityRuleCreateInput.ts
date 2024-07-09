import { RecipeStepCreateNestedManyWithoutQualityRulesInput } from "./RecipeStepCreateNestedManyWithoutQualityRulesInput";

export type QualityRuleCreateInput = {
  name?: string | null;
  description?: string | null;
  ruleType?: "Option1" | null;
  script?: string | null;
  recipeSteps?: RecipeStepCreateNestedManyWithoutQualityRulesInput;
};
