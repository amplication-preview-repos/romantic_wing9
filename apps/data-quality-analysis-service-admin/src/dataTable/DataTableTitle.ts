import { DataTable as TDataTable } from "../api/dataTable/DataTable";

export const DATATABLE_TITLE_FIELD = "name";

export const DataTableTitle = (record: TDataTable): string => {
  return record.name?.toString() || String(record.id);
};
