import { RecipeSequence as TRecipeSequence } from "../api/recipeSequence/RecipeSequence";

export const RECIPESEQUENCE_TITLE_FIELD = "name";

export const RecipeSequenceTitle = (record: TRecipeSequence): string => {
  return record.name?.toString() || String(record.id);
};
