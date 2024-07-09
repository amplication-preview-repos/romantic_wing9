import { TableWhereUniqueInput } from "../table/TableWhereUniqueInput";
import { RecipeColumnsUpdateManyWithoutColumnsInput } from "./RecipeColumnsUpdateManyWithoutColumnsInput";

export type ColumnUpdateInput = {
  dataType?: "Option1" | null;
  name?: string | null;
  isUnique?: boolean | null;
  isNullable?: boolean | null;
  table?: TableWhereUniqueInput | null;
  recipeColumnsItems?: RecipeColumnsUpdateManyWithoutColumnsInput;
};
