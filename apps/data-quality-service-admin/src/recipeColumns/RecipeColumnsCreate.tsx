import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { RecipeStepTitle } from "../recipeStep/RecipeStepTitle";
import { ColumnTitle } from "../column/ColumnTitle";

export const RecipeColumnsCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="recipeStep.id"
          reference="RecipeStep"
          label="recipeStep"
        >
          <SelectInput optionText={RecipeStepTitle} />
        </ReferenceInput>
        <ReferenceInput source="column.id" reference="Column" label="column">
          <SelectInput optionText={ColumnTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
