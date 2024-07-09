import { RecipeExecution as TRecipeExecution } from "../api/recipeExecution/RecipeExecution";

export const RECIPEEXECUTION_TITLE_FIELD = "id";

export const RecipeExecutionTitle = (record: TRecipeExecution): string => {
  return record.id?.toString() || String(record.id);
};
