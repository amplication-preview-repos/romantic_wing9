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
import { TABLE_TITLE_FIELD } from "../table/TableTitle";
import { RECIPE_TITLE_FIELD } from "../recipe/RecipeTitle";

export const AnalysisResultList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"AnalysisResults"}
      perPage={50}
      pagination={<Pagination />}
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
        <ReferenceField label="recipe" source="recipe.id" reference="Recipe">
          <TextField source={RECIPE_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
