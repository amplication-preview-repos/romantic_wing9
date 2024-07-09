import * as graphql from "@nestjs/graphql";
import { DataTableResolverBase } from "./base/dataTable.resolver.base";
import { DataTable } from "./base/DataTable";
import { DataTableService } from "./dataTable.service";

@graphql.Resolver(() => DataTable)
export class DataTableResolver extends DataTableResolverBase {
  constructor(protected readonly service: DataTableService) {
    super(service);
  }
}
