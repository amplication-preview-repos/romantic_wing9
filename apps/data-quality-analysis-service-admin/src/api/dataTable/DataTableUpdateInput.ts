import { ColumnUpdateManyWithoutDataTablesInput } from "./ColumnUpdateManyWithoutDataTablesInput";
import { AnalysisResultUpdateManyWithoutDataTablesInput } from "./AnalysisResultUpdateManyWithoutDataTablesInput";
import { RecipeExecutionUpdateManyWithoutDataTablesInput } from "./RecipeExecutionUpdateManyWithoutDataTablesInput";

export type DataTableUpdateInput = {
  description?: string | null;
  name?: string | null;
  columns?: ColumnUpdateManyWithoutDataTablesInput;
  analysisResults?: AnalysisResultUpdateManyWithoutDataTablesInput;
  recipeExecutions?: RecipeExecutionUpdateManyWithoutDataTablesInput;
};
