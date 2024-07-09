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
} from "react-admin";

import { RECIPESTEP_TITLE_FIELD } from "./RecipeStepTitle";
import { COLUMN_TITLE_FIELD } from "../column/ColumnTitle";
import { QUALITYRULE_TITLE_FIELD } from "../qualityRule/QualityRuleTitle";
import { RECIPE_TITLE_FIELD } from "../recipe/RecipeTitle";

export const RecipeStepShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceField label="Recipe" source="recipe.id" reference="Recipe">
          <TextField source={RECIPE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="RecipeColumns"
          target="recipeStepId"
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
