import { RecipeColumns as TRecipeColumns } from "../api/recipeColumns/RecipeColumns";

export const RECIPECOLUMNS_TITLE_FIELD = "id";

export const RecipeColumnsTitle = (record: TRecipeColumns): string => {
  return record.id?.toString() || String(record.id);
};
