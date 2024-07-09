import { RecipeStepWhereInput } from "./RecipeStepWhereInput";
import { RecipeStepOrderByInput } from "./RecipeStepOrderByInput";

export type RecipeStepFindManyArgs = {
  where?: RecipeStepWhereInput;
  orderBy?: Array<RecipeStepOrderByInput>;
  skip?: number;
  take?: number;
};
