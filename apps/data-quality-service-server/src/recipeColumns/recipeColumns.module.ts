import { Module } from "@nestjs/common";
import { RecipeColumnsModuleBase } from "./base/recipeColumns.module.base";
import { RecipeColumnsService } from "./recipeColumns.service";
import { RecipeColumnsController } from "./recipeColumns.controller";
import { RecipeColumnsResolver } from "./recipeColumns.resolver";

@Module({
  imports: [RecipeColumnsModuleBase],
  controllers: [RecipeColumnsController],
  providers: [RecipeColumnsService, RecipeColumnsResolver],
  exports: [RecipeColumnsService],
})
export class RecipeColumnsModule {}
