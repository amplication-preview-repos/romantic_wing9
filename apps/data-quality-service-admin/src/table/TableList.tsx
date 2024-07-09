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
import { DATABASE_TITLE_FIELD } from "../database/DatabaseTitle";

export const TableList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Tables"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="name" source="name" />
        <TextField label="description" source="description" />
        <TextField label="creationDate" source="creationDate" />
        <TextField label="lastUpdate" source="lastUpdate" />
        <TextField label="owner" source="owner" />
        <ReferenceField
          label="database"
          source="database.id"
          reference="Database"
        >
          <TextField source={DATABASE_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
