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
  BooleanField,
} from "react-admin";

import { RECIPE_TITLE_FIELD } from "./RecipeTitle";
import { DATATABLE_TITLE_FIELD } from "../dataTable/DataTableTitle";

export const RecipeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="steps" source="steps" />
        <TextField label="type" source="typeField" />
        <TextField label="name" source="name" />
        <ReferenceManyField
          reference="AnalysisResult"
          target="recipeId"
          label="AnalysisResults"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="results" source="results" />
            <ReferenceField
              label="recipe"
              source="recipe.id"
              reference="Recipe"
            >
              <TextField source={RECIPE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="dataTable"
              source="datatable.id"
              reference="DataTable"
            >
              <TextField source={DATATABLE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="RecipeExecution"
          target="recipeId"
          label="RecipeExecutions"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="executedAt" source="executedAt" />
            <TextField label="results" source="results" />
            <BooleanField label="isErrored" source="isErrored" />
            <ReferenceField
              label="recipe"
              source="recipe.id"
              reference="Recipe"
            >
              <TextField source={RECIPE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="dataTable"
              source="datatable.id"
              reference="DataTable"
            >
              <TextField source={DATATABLE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
