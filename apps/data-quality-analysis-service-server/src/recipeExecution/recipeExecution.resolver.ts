import * as graphql from "@nestjs/graphql";
import { RecipeExecutionResolverBase } from "./base/recipeExecution.resolver.base";
import { RecipeExecution } from "./base/RecipeExecution";
import { RecipeExecutionService } from "./recipeExecution.service";

@graphql.Resolver(() => RecipeExecution)
export class RecipeExecutionResolver extends RecipeExecutionResolverBase {
  constructor(protected readonly service: RecipeExecutionService) {
    super(service);
  }
}
