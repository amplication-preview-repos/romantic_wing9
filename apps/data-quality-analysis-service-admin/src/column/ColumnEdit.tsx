import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { DataTableTitle } from "../dataTable/DataTableTitle";

export const ColumnEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="dataType" source="dataType" />
        <TextInput label="name" source="name" />
        <ReferenceInput
          source="dataTable.id"
          reference="DataTable"
          label="dataTable"
        >
          <SelectInput optionText={DataTableTitle} />
        </ReferenceInput>
        <div />
      </SimpleForm>
    </Edit>
  );
};
