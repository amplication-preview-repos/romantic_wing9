import { RecipeStepWhereUniqueInput } from "../recipeStep/RecipeStepWhereUniqueInput";
import { ColumnWhereUniqueInput } from "../column/ColumnWhereUniqueInput";

export type RecipeColumnsUpdateInput = {
  recipeStep?: RecipeStepWhereUniqueInput | null;
  column?: ColumnWhereUniqueInput | null;
};
