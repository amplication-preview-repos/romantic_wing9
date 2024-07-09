import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RecipeExecutionService } from "./recipeExecution.service";
import { RecipeExecutionControllerBase } from "./base/recipeExecution.controller.base";

@swagger.ApiTags("recipeExecutions")
@common.Controller("recipeExecutions")
export class RecipeExecutionController extends RecipeExecutionControllerBase {
  constructor(protected readonly service: RecipeExecutionService) {
    super(service);
  }
}
