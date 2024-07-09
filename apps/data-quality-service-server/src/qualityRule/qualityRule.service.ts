import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QualityRuleServiceBase } from "./base/qualityRule.service.base";

@Injectable()
export class QualityRuleService extends QualityRuleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
