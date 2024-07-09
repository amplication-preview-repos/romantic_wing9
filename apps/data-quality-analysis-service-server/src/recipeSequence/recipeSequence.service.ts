import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RecipeSequenceServiceBase } from "./base/recipeSequence.service.base";

@Injectable()
export class RecipeSequenceService extends RecipeSequenceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
