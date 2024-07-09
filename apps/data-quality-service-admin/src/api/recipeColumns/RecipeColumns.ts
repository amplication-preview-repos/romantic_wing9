import { RecipeStep } from "../recipeStep/RecipeStep";
import { Column } from "../column/Column";

export type RecipeColumns = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  recipeStep?: RecipeStep | null;
  column?: Column | null;
};
