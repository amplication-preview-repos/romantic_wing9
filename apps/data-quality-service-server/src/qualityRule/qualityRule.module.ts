import { Module } from "@nestjs/common";
import { QualityRuleModuleBase } from "./base/qualityRule.module.base";
import { QualityRuleService } from "./qualityRule.service";
import { QualityRuleController } from "./qualityRule.controller";
import { QualityRuleResolver } from "./qualityRule.resolver";

@Module({
  imports: [QualityRuleModuleBase],
  controllers: [QualityRuleController],
  providers: [QualityRuleService, QualityRuleResolver],
  exports: [QualityRuleService],
})
export class QualityRuleModule {}
