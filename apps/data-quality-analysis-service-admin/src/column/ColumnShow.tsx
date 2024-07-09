import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { DATATABLE_TITLE_FIELD } from "../dataTable/DataTableTitle";

export const ColumnShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
