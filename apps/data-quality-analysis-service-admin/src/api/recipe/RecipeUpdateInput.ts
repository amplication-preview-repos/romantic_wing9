import { InputJsonValue } from "../../types";
import { AnalysisResultUpdateManyWithoutRecipesInput } from "./AnalysisResultUpdateManyWithoutRecipesInput";
import { RecipeExecutionUpdateManyWithoutRecipesInput } from "./RecipeExecutionUpdateManyWithoutRecipesInput";

export type RecipeUpdateInput = {
  steps?: InputJsonValue;
  typeField?: "Option1" | null;
  name?: string | null;
  analysisResults?: AnalysisResultUpdateManyWithoutRecipesInput;
  recipeExecutions?: RecipeExecutionUpdateManyWithoutRecipesInput;
};
