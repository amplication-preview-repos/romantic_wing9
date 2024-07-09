import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DatabaseService } from "./database.service";
import { DatabaseControllerBase } from "./base/database.controller.base";

@swagger.ApiTags("databases")
@common.Controller("databases")
export class DatabaseController extends DatabaseControllerBase {
  constructor(protected readonly service: DatabaseService) {
    super(service);
  }
}
