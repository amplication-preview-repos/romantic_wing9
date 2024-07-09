import { Module } from "@nestjs/common";
import { RecipeSequenceModuleBase } from "./base/recipeSequence.module.base";
import { RecipeSequenceService } from "./recipeSequence.service";
import { RecipeSequenceController } from "./recipeSequence.controller";
import { RecipeSequenceResolver } from "./recipeSequence.resolver";

@Module({
  imports: [RecipeSequenceModuleBase],
  controllers: [RecipeSequenceController],
  providers: [RecipeSequenceService, RecipeSequenceResolver],
  exports: [RecipeSequenceService],
})
export class RecipeSequenceModule {}
