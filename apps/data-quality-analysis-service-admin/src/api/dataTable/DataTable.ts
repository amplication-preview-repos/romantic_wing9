import { Column } from "../column/Column";
import { AnalysisResult } from "../analysisResult/AnalysisResult";
import { RecipeExecution } from "../recipeExecution/RecipeExecution";

export type DataTable = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  name: string | null;
  columns?: Array<Column>;
  analysisResults?: Array<AnalysisResult>;
  recipeExecutions?: Array<RecipeExecution>;
};
