import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { TABLE_TITLE_FIELD } from "../table/TableTitle";
import { RECIPE_TITLE_FIELD } from "../recipe/RecipeTitle";

export const AnalysisResultShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
