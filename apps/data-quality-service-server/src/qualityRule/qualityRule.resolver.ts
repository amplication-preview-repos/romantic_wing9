import * as graphql from "@nestjs/graphql";
import { QualityRuleResolverBase } from "./base/qualityRule.resolver.base";
import { QualityRule } from "./base/QualityRule";
import { QualityRuleService } from "./qualityRule.service";

@graphql.Resolver(() => QualityRule)
export class QualityRuleResolver extends QualityRuleResolverBase {
  constructor(protected readonly service: QualityRuleService) {
    super(service);
  }
}
