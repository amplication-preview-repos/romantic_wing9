import { JsonValue } from "type-fest";
import { Recipe } from "../recipe/Recipe";
import { DataTable } from "../dataTable/DataTable";

export type RecipeExecution = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  executedAt: Date | null;
  results: JsonValue;
  isErrored: boolean | null;
  recipe?: Recipe | null;
  dataTable?: DataTable | null;
};
