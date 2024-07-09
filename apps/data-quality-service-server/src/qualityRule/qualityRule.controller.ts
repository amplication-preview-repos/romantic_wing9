import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QualityRuleService } from "./qualityRule.service";
import { QualityRuleControllerBase } from "./base/qualityRule.controller.base";

@swagger.ApiTags("qualityRules")
@common.Controller("qualityRules")
export class QualityRuleController extends QualityRuleControllerBase {
  constructor(protected readonly service: QualityRuleService) {
    super(service);
  }
}
