import { RecipeStepUpdateManyWithoutRecipesInput } from "./RecipeStepUpdateManyWithoutRecipesInput";
import { AnalysisResultUpdateManyWithoutRecipesInput } from "./AnalysisResultUpdateManyWithoutRecipesInput";

export type RecipeUpdateInput = {
  description?: string | null;
  creationDate?: Date | null;
  name?: string | null;
  owner?: string | null;
  recipeSteps?: RecipeStepUpdateManyWithoutRecipesInput;
  analysisResults?: AnalysisResultUpdateManyWithoutRecipesInput;
};
