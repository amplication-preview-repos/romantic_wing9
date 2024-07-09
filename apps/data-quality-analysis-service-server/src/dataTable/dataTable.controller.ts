import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DataTableService } from "./dataTable.service";
import { DataTableControllerBase } from "./base/dataTable.controller.base";

@swagger.ApiTags("dataTables")
@common.Controller("dataTables")
export class DataTableController extends DataTableControllerBase {
  constructor(protected readonly service: DataTableService) {
    super(service);
  }
}
