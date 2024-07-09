import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { QualityRuleTitle } from "../qualityRule/QualityRuleTitle";
import { RecipeTitle } from "../recipe/RecipeTitle";
import { RecipeColumnsTitle } from "../recipeColumns/RecipeColumnsTitle";

export const RecipeStepEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
