import { RecipeStep } from "../recipeStep/RecipeStep";
import { AnalysisResult } from "../analysisResult/AnalysisResult";

export type Recipe = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  creationDate: Date | null;
  name: string | null;
  owner: string | null;
  recipeSteps?: Array<RecipeStep>;
  analysisResults?: Array<AnalysisResult>;
};
