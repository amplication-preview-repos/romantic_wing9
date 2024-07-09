import { JsonValue } from "type-fest";

export type RecipeSequence = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  recipes: JsonValue;
};
