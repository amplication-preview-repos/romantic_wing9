import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { QualityRuleTitle } from "../qualityRule/QualityRuleTitle";
import { RecipeTitle } from "../recipe/RecipeTitle";
import { RecipeColumnsTitle } from "../recipeColumns/RecipeColumnsTitle";

export const RecipeStepCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="order" source="order" />
        <div />
        <ReferenceInput
          source="qualityRule.id"
          reference="QualityRule"
          label="QualityRule"
        >
          <SelectInput optionText={QualityRuleTitle} />
        </ReferenceInput>
        <ReferenceInput source="recipe.id" reference="Recipe" label="Recipe">
          <SelectInput optionText={RecipeTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="recipeColumnsItems"
          reference="RecipeColumns"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RecipeColumnsTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
