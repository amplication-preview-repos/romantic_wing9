import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { RecipeTitle } from "../recipe/RecipeTitle";
import { DataTableTitle } from "../dataTable/DataTableTitle";

export const RecipeExecutionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="executedAt" source="executedAt" />
        <div />
        <BooleanInput label="isErrored" source="isErrored" />
        <ReferenceInput source="recipe.id" reference="Recipe" label="recipe">
          <SelectInput optionText={RecipeTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="dataTable.id"
          reference="DataTable"
          label="dataTable"
        >
          <SelectInput optionText={DataTableTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
