import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RecipeColumnsServiceBase } from "./base/recipeColumns.service.base";

@Injectable()
export class RecipeColumnsService extends RecipeColumnsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
