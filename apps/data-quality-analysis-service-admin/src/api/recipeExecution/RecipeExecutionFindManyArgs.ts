import { RecipeExecutionWhereInput } from "./RecipeExecutionWhereInput";
import { RecipeExecutionOrderByInput } from "./RecipeExecutionOrderByInput";

export type RecipeExecutionFindManyArgs = {
  where?: RecipeExecutionWhereInput;
  orderBy?: Array<RecipeExecutionOrderByInput>;
  skip?: number;
  take?: number;
};
