import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type RecipeSequenceWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  recipes?: JsonFilter;
};
