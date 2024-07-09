import { QualityRuleWhereInput } from "./QualityRuleWhereInput";
import { QualityRuleOrderByInput } from "./QualityRuleOrderByInput";

export type QualityRuleFindManyArgs = {
  where?: QualityRuleWhereInput;
  orderBy?: Array<QualityRuleOrderByInput>;
  skip?: number;
  take?: number;
};
