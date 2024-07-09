import { QualityRule as TQualityRule } from "../api/qualityRule/QualityRule";

export const QUALITYRULE_TITLE_FIELD = "name";

export const QualityRuleTitle = (record: TQualityRule): string => {
  return record.name?.toString() || String(record.id);
};
