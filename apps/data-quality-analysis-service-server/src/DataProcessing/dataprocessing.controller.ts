import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { DataProcessingService } from "./dataprocessing.service";
import { ResultDto } from "../dataProcessing/ResultDto";
import { ResultDtoWithColor } from "../dataProcessing/ResultDtoWithColor";
import { ColumnStatsDto } from "../dataProcessing/ColumnStatsDto";
import { ColumnDto } from "../dataProcessing/ColumnDto";

@swagger.ApiTags("dataProcessings")
@common.Controller("dataProcessings")
export class DataProcessingController {
  constructor(protected readonly service: DataProcessingService) {}

  @common.Post("/data/:tableId/apply-recipe")
  @swagger.ApiOkResponse({
    type: ResultDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ApplyRecipeToColumns(
    @common.Body()
    body: ResultDto
  ): Promise<ResultDto> {
        return this.service.ApplyRecipeToColumns(body);
      }

  @common.Post("/data/:tableId/apply-recipe")
  @swagger.ApiOkResponse({
    type: ResultDtoWithColor
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ApplyRecipeToColumnsWithColor(
    @common.Body()
    body: ResultDto
  ): Promise<ResultDtoWithColor> {
        return this.service.ApplyRecipeToColumnsWithColor(body);
      }

  @common.Get("/tables/:tableId/columns/stats")
  @swagger.ApiOkResponse({
    type: ColumnStatsDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetColumnStats(
    @common.Body()
    body: ResultDto
  ): Promise<ColumnStatsDto[]> {
        return this.service.GetColumnStats(body);
      }

  @common.Get("/tables/:tableId/columns/stats")
  @swagger.ApiOkResponse({
    type: ColumnStatsDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetColumnStatsPaginated(
    @common.Body()
    body: ResultDto
  ): Promise<ColumnStatsDto[]> {
        return this.service.GetColumnStatsPaginated(body);
      }

  @common.Get("/tables/:tableId/columns")
  @swagger.ApiOkResponse({
    type: ColumnDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetTableColumns(
    @common.Body()
    body: ResultDto
  ): Promise<ColumnDto[]> {
        return this.service.GetTableColumns(body);
      }

  @common.Get("/tables/:tableId/columns")
  @swagger.ApiOkResponse({
    type: ColumnDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetTableColumnsPaginated(
    @common.Body()
    body: ResultDto
  ): Promise<ColumnDto[]> {
        return this.service.GetTableColumnsPaginated(body);
      }
}
