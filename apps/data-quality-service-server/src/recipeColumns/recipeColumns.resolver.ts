import * as graphql from "@nestjs/graphql";
import { RecipeColumnsResolverBase } from "./base/recipeColumns.resolver.base";
import { RecipeColumns } from "./base/RecipeColumns";
import { RecipeColumnsService } from "./recipeColumns.service";

@graphql.Resolver(() => RecipeColumns)
export class RecipeColumnsResolver extends RecipeColumnsResolverBase {
  constructor(protected readonly service: RecipeColumnsService) {
    super(service);
  }
}
