import * as graphql from "@nestjs/graphql";
import { RecipeSequenceResolverBase } from "./base/recipeSequence.resolver.base";
import { RecipeSequence } from "./base/RecipeSequence";
import { RecipeSequenceService } from "./recipeSequence.service";

@graphql.Resolver(() => RecipeSequence)
export class RecipeSequenceResolver extends RecipeSequenceResolverBase {
  constructor(protected readonly service: RecipeSequenceService) {
    super(service);
  }
}
