import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { DATABASE_TITLE_FIELD } from "./DatabaseTitle";

export const DatabaseShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="connectionDetails" source="connectionDetails" />
        <TextField label="name" source="name" />
        <TextField label="description" source="description" />
        <TextField label="type" source="typeField" />
        <ReferenceManyField
          reference="Table"
          target="databaseId"
          label="Tables"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
