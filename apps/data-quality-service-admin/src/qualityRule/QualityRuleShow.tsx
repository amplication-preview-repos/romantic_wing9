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

import { QUALITYRULE_TITLE_FIELD } from "./QualityRuleTitle";
import { RECIPE_TITLE_FIELD } from "../recipe/RecipeTitle";

export const QualityRuleShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="name" source="name" />
        <TextField label="description" source="description" />
        <TextField label="ruleType" source="ruleType" />
        <TextField label="script" source="script" />
        <ReferenceManyField
          reference="RecipeStep"
          target="qualityRuleId"
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
      </SimpleShowLayout>
    </Show>
  );
};
