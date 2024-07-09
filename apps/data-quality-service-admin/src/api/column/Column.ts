import { Table } from "../table/Table";
import { RecipeColumns } from "../recipeColumns/RecipeColumns";

export type Column = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  dataType?: "Option1" | null;
  name: string | null;
  isUnique: boolean | null;
  isNullable: boolean | null;
  table?: Table | null;
  recipeColumnsItems?: Array<RecipeColumns>;
};
