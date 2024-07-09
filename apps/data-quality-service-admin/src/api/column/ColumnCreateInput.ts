import { TableWhereUniqueInput } from "../table/TableWhereUniqueInput";
import { RecipeColumnsCreateNestedManyWithoutColumnsInput } from "./RecipeColumnsCreateNestedManyWithoutColumnsInput";

export type ColumnCreateInput = {
  dataType?: "Option1" | null;
  name?: string | null;
  isUnique?: boolean | null;
  isNullable?: boolean | null;
  table?: TableWhereUniqueInput | null;
  recipeColumnsItems?: RecipeColumnsCreateNestedManyWithoutColumnsInput;
};
