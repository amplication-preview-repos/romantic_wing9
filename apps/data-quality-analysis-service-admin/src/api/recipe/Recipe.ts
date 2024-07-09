import { JsonValue } from "type-fest";
import { AnalysisResult } from "../analysisResult/AnalysisResult";
import { RecipeExecution } from "../recipeExecution/RecipeExecution";

export type Recipe = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  steps: JsonValue;
  typeField?: "Option1" | null;
  name: string | null;
  analysisResults?: Array<AnalysisResult>;
  recipeExecutions?: Array<RecipeExecution>;
};
