import * as graphql from "@nestjs/graphql";
import { AppUserResolverBase } from "./base/appUser.resolver.base";
import { AppUser } from "./base/AppUser";
import { AppUserService } from "./appUser.service";

@graphql.Resolver(() => AppUser)
export class AppUserResolver extends AppUserResolverBase {
  constructor(protected readonly service: AppUserService) {
    super(service);
  }
}
