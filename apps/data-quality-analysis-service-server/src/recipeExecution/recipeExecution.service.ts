import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RecipeExecutionServiceBase } from "./base/recipeExecution.service.base";

@Injectable()
export class RecipeExecutionService extends RecipeExecutionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
