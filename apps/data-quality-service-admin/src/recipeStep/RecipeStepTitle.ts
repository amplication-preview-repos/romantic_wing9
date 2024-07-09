import { RecipeStep as TRecipeStep } from "../api/recipeStep/RecipeStep";

export const RECIPESTEP_TITLE_FIELD = "id";

export const RecipeStepTitle = (record: TRecipeStep): string => {
  return record.id?.toString() || String(record.id);
};
