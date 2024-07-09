import { RecipeStepCreateNestedManyWithoutRecipesInput } from "./RecipeStepCreateNestedManyWithoutRecipesInput";
import { AnalysisResultCreateNestedManyWithoutRecipesInput } from "./AnalysisResultCreateNestedManyWithoutRecipesInput";

export type RecipeCreateInput = {
  description?: string | null;
  creationDate?: Date | null;
  name?: string | null;
  owner?: string | null;
  recipeSteps?: RecipeStepCreateNestedManyWithoutRecipesInput;
  analysisResults?: AnalysisResultCreateNestedManyWithoutRecipesInput;
};
