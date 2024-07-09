import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { RecipeStepTitle } from "../recipeStep/RecipeStepTitle";

export const QualityRuleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="description" multiline source="description" />
        <SelectInput
          source="ruleType"
          label="ruleType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="script" multiline source="script" />
        <ReferenceArrayInput
          source="recipeSteps"
          reference="RecipeStep"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RecipeStepTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
