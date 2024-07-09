import { Module } from "@nestjs/common";
import { RecipeStepModuleBase } from "./base/recipeStep.module.base";
import { RecipeStepService } from "./recipeStep.service";
import { RecipeStepController } from "./recipeStep.controller";
import { RecipeStepResolver } from "./recipeStep.resolver";

@Module({
  imports: [RecipeStepModuleBase],
  controllers: [RecipeStepController],
  providers: [RecipeStepService, RecipeStepResolver],
  exports: [RecipeStepService],
})
export class RecipeStepModule {}
