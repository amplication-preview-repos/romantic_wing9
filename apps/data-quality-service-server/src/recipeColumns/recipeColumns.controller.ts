import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RecipeColumnsService } from "./recipeColumns.service";
import { RecipeColumnsControllerBase } from "./base/recipeColumns.controller.base";

@swagger.ApiTags("recipeColumns")
@common.Controller("recipeColumns")
export class RecipeColumnsController extends RecipeColumnsControllerBase {
  constructor(protected readonly service: RecipeColumnsService) {
    super(service);
  }
}
