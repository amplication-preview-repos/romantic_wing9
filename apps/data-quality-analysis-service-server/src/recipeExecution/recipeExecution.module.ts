import { Module } from "@nestjs/common";
import { RecipeExecutionModuleBase } from "./base/recipeExecution.module.base";
import { RecipeExecutionService } from "./recipeExecution.service";
import { RecipeExecutionController } from "./recipeExecution.controller";
import { RecipeExecutionResolver } from "./recipeExecution.resolver";

@Module({
  imports: [RecipeExecutionModuleBase],
  controllers: [RecipeExecutionController],
  providers: [RecipeExecutionService, RecipeExecutionResolver],
  exports: [RecipeExecutionService],
})
export class RecipeExecutionModule {}
