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
} from "react-admin";

import { QUALITYRULE_TITLE_FIELD } from "../qualityRule/QualityRuleTitle";
import { RECIPE_TITLE_FIELD } from "./RecipeTitle";
import { TABLE_TITLE_FIELD } from "../table/TableTitle";

export const RecipeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="description" source="description" />
        <TextField label="creationDate" source="creationDate" />
        <TextField label="name" source="name" />
        <TextField label="owner" source="owner" />
        <ReferenceManyField
          reference="RecipeStep"
          target="recipeId"
          label="RecipeSteps"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="order" source="order" />
            <TextField label="parameters" source="parameters" />
            <ReferenceField
              label="QualityRule"
              source="qualityrule.id"
              reference="QualityRule"
            >
              <TextField source={QUALITYRULE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Recipe"
              source="recipe.id"
              reference="Recipe"
            >
              <TextField source={RECIPE_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="AnalysisResult"
          target="recipeId"
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
