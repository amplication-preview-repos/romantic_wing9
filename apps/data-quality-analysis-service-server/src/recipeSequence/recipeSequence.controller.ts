import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RecipeSequenceService } from "./recipeSequence.service";
import { RecipeSequenceControllerBase } from "./base/recipeSequence.controller.base";

@swagger.ApiTags("recipeSequences")
@common.Controller("recipeSequences")
export class RecipeSequenceController extends RecipeSequenceControllerBase {
  constructor(protected readonly service: RecipeSequenceService) {
    super(service);
  }
}
