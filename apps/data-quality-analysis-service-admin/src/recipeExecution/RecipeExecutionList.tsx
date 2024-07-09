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
import { RECIPE_TITLE_FIELD } from "../recipe/RecipeTitle";
import { DATATABLE_TITLE_FIELD } from "../dataTable/DataTableTitle";

export const RecipeExecutionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"RecipeExecutions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
