import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { RECIPE_TITLE_FIELD } from "../recipe/RecipeTitle";
import { DATATABLE_TITLE_FIELD } from "../dataTable/DataTableTitle";

export const RecipeExecutionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="executedAt" source="executedAt" />
        <TextField label="results" source="results" />
        <BooleanField label="isErrored" source="isErrored" />
        <ReferenceField label="recipe" source="recipe.id" reference="Recipe">
          <TextField source={RECIPE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="dataTable"
          source="datatable.id"
          reference="DataTable"
        >
          <TextField source={DATATABLE_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
