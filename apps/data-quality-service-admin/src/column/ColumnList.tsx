import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { TABLE_TITLE_FIELD } from "../table/TableTitle";

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
        <BooleanField label="isUnique" source="isUnique" />
        <BooleanField label="isNullable" source="isNullable" />
        <ReferenceField label="table" source="table.id" reference="Table">
          <TextField source={TABLE_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
