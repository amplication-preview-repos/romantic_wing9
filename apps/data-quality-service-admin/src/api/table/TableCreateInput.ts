import { DatabaseWhereUniqueInput } from "../database/DatabaseWhereUniqueInput";
import { ColumnCreateNestedManyWithoutTablesInput } from "./ColumnCreateNestedManyWithoutTablesInput";
import { AnalysisResultCreateNestedManyWithoutTablesInput } from "./AnalysisResultCreateNestedManyWithoutTablesInput";

export type TableCreateInput = {
  name?: string | null;
  description?: string | null;
  creationDate?: Date | null;
  lastUpdate?: Date | null;
  owner?: string | null;
  database?: DatabaseWhereUniqueInput | null;
  columns?: ColumnCreateNestedManyWithoutTablesInput;
  analysisResults?: AnalysisResultCreateNestedManyWithoutTablesInput;
};
