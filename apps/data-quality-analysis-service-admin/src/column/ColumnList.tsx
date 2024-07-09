import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { DATATABLE_TITLE_FIELD } from "../dataTable/DataTableTitle";

export const ColumnList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Columns"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="dataType" source="dataType" />
        <TextField label="name" source="name" />
        <ReferenceField
          label="dataTable"
          source="datatable.id"
          reference="DataTable"
        >
          <TextField source={DATATABLE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="columnStats" source="columnStats" />
      </Datagrid>
    </List>
  );
};
