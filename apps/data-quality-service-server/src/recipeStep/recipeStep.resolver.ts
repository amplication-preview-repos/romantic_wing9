import * as graphql from "@nestjs/graphql";
import { RecipeStepResolverBase } from "./base/recipeStep.resolver.base";
import { RecipeStep } from "./base/RecipeStep";
import { RecipeStepService } from "./recipeStep.service";

@graphql.Resolver(() => RecipeStep)
export class RecipeStepResolver extends RecipeStepResolverBase {
  constructor(protected readonly service: RecipeStepService) {
    super(service);
  }
}
