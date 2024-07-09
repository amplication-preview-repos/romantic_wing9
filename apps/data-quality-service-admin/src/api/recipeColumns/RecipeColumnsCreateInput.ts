import { RecipeStepWhereUniqueInput } from "../recipeStep/RecipeStepWhereUniqueInput";
import { ColumnWhereUniqueInput } from "../column/ColumnWhereUniqueInput";

export type RecipeColumnsCreateInput = {
  recipeStep?: RecipeStepWhereUniqueInput | null;
  column?: ColumnWhereUniqueInput | null;
};
