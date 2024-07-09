import { DatabaseWhereUniqueInput } from "../database/DatabaseWhereUniqueInput";
import { ColumnUpdateManyWithoutTablesInput } from "./ColumnUpdateManyWithoutTablesInput";
import { AnalysisResultUpdateManyWithoutTablesInput } from "./AnalysisResultUpdateManyWithoutTablesInput";

export type TableUpdateInput = {
  name?: string | null;
  description?: string | null;
  creationDate?: Date | null;
  lastUpdate?: Date | null;
  owner?: string | null;
  database?: DatabaseWhereUniqueInput | null;
  columns?: ColumnUpdateManyWithoutTablesInput;
  analysisResults?: AnalysisResultUpdateManyWithoutTablesInput;
};
