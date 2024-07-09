import * as graphql from "@nestjs/graphql";
import { DatabaseResolverBase } from "./base/database.resolver.base";
import { Database } from "./base/Database";
import { DatabaseService } from "./database.service";

@graphql.Resolver(() => Database)
export class DatabaseResolver extends DatabaseResolverBase {
  constructor(protected readonly service: DatabaseService) {
    super(service);
  }
}
