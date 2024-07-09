import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RecipeStepService } from "./recipeStep.service";
import { RecipeStepControllerBase } from "./base/recipeStep.controller.base";

@swagger.ApiTags("recipeSteps")
@common.Controller("recipeSteps")
export class RecipeStepController extends RecipeStepControllerBase {
  constructor(protected readonly service: RecipeStepService) {
    super(service);
  }
}
