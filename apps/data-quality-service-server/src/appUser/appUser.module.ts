import { Module } from "@nestjs/common";
import { AppUserModuleBase } from "./base/appUser.module.base";
import { AppUserService } from "./appUser.service";
import { AppUserController } from "./appUser.controller";
import { AppUserResolver } from "./appUser.resolver";

@Module({
  imports: [AppUserModuleBase],
  controllers: [AppUserController],
  providers: [AppUserService, AppUserResolver],
  exports: [AppUserService],
})
export class AppUserModule {}
