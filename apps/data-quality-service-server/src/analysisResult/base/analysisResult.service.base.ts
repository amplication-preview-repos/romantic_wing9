/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  AnalysisResult as PrismaAnalysisResult,
  Table as PrismaTable,
  Recipe as PrismaRecipe,
} from "@prisma/client";

export class AnalysisResultServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.AnalysisResultCountArgs, "select">
  ): Promise<number> {
    return this.prisma.analysisResult.count(args);
  }

  async analysisResults(
    args: Prisma.AnalysisResultFindManyArgs
  ): Promise<PrismaAnalysisResult[]> {
    return this.prisma.analysisResult.findMany(args);
  }
  async analysisResult(
    args: Prisma.AnalysisResultFindUniqueArgs
  ): Promise<PrismaAnalysisResult | null> {
    return this.prisma.analysisResult.findUnique(args);
  }
  async createAnalysisResult(
    args: Prisma.AnalysisResultCreateArgs
  ): Promise<PrismaAnalysisResult> {
    return this.prisma.analysisResult.create(args);
  }
  async updateAnalysisResult(
    args: Prisma.AnalysisResultUpdateArgs
  ): Promise<PrismaAnalysisResult> {
    return this.prisma.analysisResult.update(args);
  }
  async deleteAnalysisResult(
    args: Prisma.AnalysisResultDeleteArgs
  ): Promise<PrismaAnalysisResult> {
    return this.prisma.analysisResult.delete(args);
  }

  async getTable(parentId: string): Promise<PrismaTable | null> {
    return this.prisma.analysisResult
      .findUnique({
        where: { id: parentId },
      })
      .table();
  }

  async getRecipe(parentId: string): Promise<PrismaRecipe | null> {
    return this.prisma.analysisResult
      .findUnique({
        where: { id: parentId },
      })
      .recipe();
  }
}
