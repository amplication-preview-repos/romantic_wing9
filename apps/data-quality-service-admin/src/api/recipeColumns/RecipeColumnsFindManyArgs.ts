import { RecipeColumnsWhereInput } from "./RecipeColumnsWhereInput";
import { RecipeColumnsOrderByInput } from "./RecipeColumnsOrderByInput";

export type RecipeColumnsFindManyArgs = {
  where?: RecipeColumnsWhereInput;
  orderBy?: Array<RecipeColumnsOrderByInput>;
  skip?: number;
  take?: number;
};
