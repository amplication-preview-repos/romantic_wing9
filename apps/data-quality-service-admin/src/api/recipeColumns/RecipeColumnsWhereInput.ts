import { StringFilter } from "../../util/StringFilter";
import { RecipeStepWhereUniqueInput } from "../recipeStep/RecipeStepWhereUniqueInput";
import { ColumnWhereUniqueInput } from "../column/ColumnWhereUniqueInput";

export type RecipeColumnsWhereInput = {
  id?: StringFilter;
  recipeStep?: RecipeStepWhereUniqueInput;
  column?: ColumnWhereUniqueInput;
};
