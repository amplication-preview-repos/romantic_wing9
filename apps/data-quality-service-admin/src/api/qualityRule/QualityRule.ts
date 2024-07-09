import { RecipeStep } from "../recipeStep/RecipeStep";

export type QualityRule = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  ruleType?: "Option1" | null;
  script: string | null;
  recipeSteps?: Array<RecipeStep>;
};
