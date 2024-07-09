import { ColumnCreateNestedManyWithoutDataTablesInput } from "./ColumnCreateNestedManyWithoutDataTablesInput";
import { AnalysisResultCreateNestedManyWithoutDataTablesInput } from "./AnalysisResultCreateNestedManyWithoutDataTablesInput";
import { RecipeExecutionCreateNestedManyWithoutDataTablesInput } from "./RecipeExecutionCreateNestedManyWithoutDataTablesInput";

export type DataTableCreateInput = {
  description?: string | null;
  name?: string | null;
  columns?: ColumnCreateNestedManyWithoutDataTablesInput;
  analysisResults?: AnalysisResultCreateNestedManyWithoutDataTablesInput;
  recipeExecutions?: RecipeExecutionCreateNestedManyWithoutDataTablesInput;
};
