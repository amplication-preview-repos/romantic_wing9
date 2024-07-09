import { Table as TTable } from "../api/table/Table";

export const TABLE_TITLE_FIELD = "name";

export const TableTitle = (record: TTable): string => {
  return record.name?.toString() || String(record.id);
};
