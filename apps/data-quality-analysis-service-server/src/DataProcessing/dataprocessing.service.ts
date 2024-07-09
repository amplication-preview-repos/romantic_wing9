import { Injectable } from "@nestjs/common";
import { RecipeDto } from "../dataProcessing/RecipeDto";
import { ResultDto } from "../dataProcessing/ResultDto";
import { ResultDtoWithColor } from "../dataProcessing/ResultDtoWithColor";
import { ColumnStatsDto } from "../dataProcessing/ColumnStatsDto";
import { ColumnDto } from "../dataProcessing/ColumnDto";

@Injectable()
export class DataProcessingService {
  constructor() {}
  async ApplyRecipeToColumns(args: RecipeDto): Promise<ResultDto> {
    throw new Error("Not implemented");
  }
  async ApplyRecipeToColumnsWithColor(args: RecipeDto): Promise<ResultDtoWithColor> {
    throw new Error("Not implemented");
  }
  async GetColumnStats(args: string): Promise<ColumnStatsDto[]> {
    throw new Error("Not implemented");
  }
  async GetColumnStatsPaginated(args: ResultDto): Promise<ColumnStatsDto[]> {
    throw new Error("Not implemented");
  }
  async GetTableColumns(args: string): Promise<ColumnDto[]> {
    throw new Error("Not implemented");
  }
  async GetTableColumnsPaginated(args: ResultDto): Promise<ColumnDto[]> {
    throw new Error("Not implemented");
  }
}
