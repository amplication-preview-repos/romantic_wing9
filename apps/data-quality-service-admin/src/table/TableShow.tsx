import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { TABLE_TITLE_FIELD } from "./TableTitle";
import { RECIPE_TITLE_FIELD } from "../recipe/RecipeTitle";
import { DATABASE_TITLE_FIELD } from "../database/DatabaseTitle";

export const TableShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField reference="Column" target="tableId" label="Columns">
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
        </ReferenceManyField>
        <ReferenceManyField
          reference="AnalysisResult"
          target="tableId"
          label="AnalysisResults"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="executionDate" source="executionDate" />
            <TextField label="resultData" source="resultData" />
            <TextField label="issuesFound" source="issuesFound" />
            <TextField label="appliedFilters" source="appliedFilters" />
            <ReferenceField label="table" source="table.id" reference="Table">
              <TextField source={TABLE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="recipe"
              source="recipe.id"
              reference="Recipe"
            >
              <TextField source={RECIPE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
