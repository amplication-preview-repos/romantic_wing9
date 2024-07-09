import { DataTable } from "../dataTable/DataTable";
import { JsonValue } from "type-fest";

export type Column = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  dataType: string | null;
  name: string | null;
  dataTable?: DataTable | null;
  columnStats: JsonValue;
};
