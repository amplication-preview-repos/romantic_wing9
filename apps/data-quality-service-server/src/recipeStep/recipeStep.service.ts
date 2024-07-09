import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RecipeStepServiceBase } from "./base/recipeStep.service.base";

@Injectable()
export class RecipeStepService extends RecipeStepServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
