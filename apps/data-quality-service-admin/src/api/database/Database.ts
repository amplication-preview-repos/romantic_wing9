import { JsonValue } from "type-fest";
import { Table } from "../table/Table";

export type Database = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  connectionDetails: JsonValue;
  name: string | null;
  description: string | null;
  typeField?: "Option1" | null;
  tables?: Array<Table>;
};
