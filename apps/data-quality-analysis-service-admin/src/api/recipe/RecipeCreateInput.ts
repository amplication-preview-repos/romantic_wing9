import { InputJsonValue } from "../../types";
import { AnalysisResultCreateNestedManyWithoutRecipesInput } from "./AnalysisResultCreateNestedManyWithoutRecipesInput";
import { RecipeExecutionCreateNestedManyWithoutRecipesInput } from "./RecipeExecutionCreateNestedManyWithoutRecipesInput";

export type RecipeCreateInput = {
  steps?: InputJsonValue;
  typeField?: "Option1" | null;
  name?: string | null;
  analysisResults?: AnalysisResultCreateNestedManyWithoutRecipesInput;
  recipeExecutions?: RecipeExecutionCreateNestedManyWithoutRecipesInput;
};
