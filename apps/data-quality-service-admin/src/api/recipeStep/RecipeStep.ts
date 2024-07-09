import { JsonValue } from "type-fest";
import { QualityRule } from "../qualityRule/QualityRule";
import { Recipe } from "../recipe/Recipe";
import { RecipeColumns } from "../recipeColumns/RecipeColumns";

export type RecipeStep = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  order: number | null;
  parameters: JsonValue;
  qualityRule?: QualityRule | null;
  recipe?: Recipe | null;
  recipeColumnsItems?: Array<RecipeColumns>;
};
