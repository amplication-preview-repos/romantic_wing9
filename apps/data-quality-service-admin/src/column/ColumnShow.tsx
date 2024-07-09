import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { RECIPESTEP_TITLE_FIELD } from "../recipeStep/RecipeStepTitle";
import { COLUMN_TITLE_FIELD } from "./ColumnTitle";
import { TABLE_TITLE_FIELD } from "../table/TableTitle";

export const ColumnShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="RecipeColumns"
          target="columnId"
          label="RecipeColumnsItems"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="recipeStep"
              source="recipestep.id"
              reference="RecipeStep"
            >
              <TextField source={RECIPESTEP_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="column"
              source="column.id"
              reference="Column"
            >
              <TextField source={COLUMN_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
