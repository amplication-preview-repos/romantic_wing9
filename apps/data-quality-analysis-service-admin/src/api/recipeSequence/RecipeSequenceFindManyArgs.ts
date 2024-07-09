import { RecipeSequenceWhereInput } from "./RecipeSequenceWhereInput";
import { RecipeSequenceOrderByInput } from "./RecipeSequenceOrderByInput";

export type RecipeSequenceFindManyArgs = {
  where?: RecipeSequenceWhereInput;
  orderBy?: Array<RecipeSequenceOrderByInput>;
  skip?: number;
  take?: number;
};
