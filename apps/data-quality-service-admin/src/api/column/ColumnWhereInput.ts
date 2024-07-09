import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { TableWhereUniqueInput } from "../table/TableWhereUniqueInput";
import { RecipeColumnsListRelationFilter } from "../recipeColumns/RecipeColumnsListRelationFilter";

export type ColumnWhereInput = {
  id?: StringFilter;
  dataType?: "Option1";
  name?: StringNullableFilter;
  isUnique?: BooleanNullableFilter;
  isNullable?: BooleanNullableFilter;
  table?: TableWhereUniqueInput;
  recipeColumnsItems?: RecipeColumnsListRelationFilter;
};
