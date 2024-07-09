import * as graphql from "@nestjs/graphql";
import { RecipeDto } from "../dataProcessing/RecipeDto";
import { ResultDto } from "../dataProcessing/ResultDto";
import { ResultDtoWithColor } from "../dataProcessing/ResultDtoWithColor";
import { ColumnStatsDto } from "../dataProcessing/ColumnStatsDto";
import { ColumnDto } from "../dataProcessing/ColumnDto";
import { DataProcessingService } from "./dataprocessing.service";

export class DataProcessingResolver {
  constructor(protected readonly service: DataProcessingService) {}

  @graphql.Mutation(() => ResultDto)
  async ApplyRecipeToColumns(
    @graphql.Args()
    args: RecipeDto
  ): Promise<ResultDto> {
    return this.service.ApplyRecipeToColumns(args);
  }

  @graphql.Mutation(() => ResultDtoWithColor)
  async ApplyRecipeToColumnsWithColor(
    @graphql.Args()
    args: RecipeDto
  ): Promise<ResultDtoWithColor> {
    return this.service.ApplyRecipeToColumnsWithColor(args);
  }

  @graphql.Query(() => [ColumnStatsDto])
  async GetColumnStats(
    @graphql.Args()
    args: string
  ): Promise<ColumnStatsDto[]> {
    return this.service.GetColumnStats(args);
  }

  @graphql.Query(() => [ColumnStatsDto])
  async GetColumnStatsPaginated(
    @graphql.Args()
    args: ResultDto
  ): Promise<ColumnStatsDto[]> {
    return this.service.GetColumnStatsPaginated(args);
  }

  @graphql.Query(() => [ColumnDto])
  async GetTableColumns(
    @graphql.Args()
    args: string
  ): Promise<ColumnDto[]> {
    return this.service.GetTableColumns(args);
  }

  @graphql.Query(() => [ColumnDto])
  async GetTableColumnsPaginated(
    @graphql.Args()
    args: ResultDto
  ): Promise<ColumnDto[]> {
    return this.service.GetTableColumnsPaginated(args);
  }
}
