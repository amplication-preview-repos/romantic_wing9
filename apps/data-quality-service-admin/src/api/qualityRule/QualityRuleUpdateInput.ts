import { RecipeStepUpdateManyWithoutQualityRulesInput } from "./RecipeStepUpdateManyWithoutQualityRulesInput";

export type QualityRuleUpdateInput = {
  name?: string | null;
  description?: string | null;
  ruleType?: "Option1" | null;
  script?: string | null;
  recipeSteps?: RecipeStepUpdateManyWithoutQualityRulesInput;
};
