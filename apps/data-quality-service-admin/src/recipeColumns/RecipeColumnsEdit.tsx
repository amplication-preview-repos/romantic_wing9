import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { RecipeStepTitle } from "../recipeStep/RecipeStepTitle";
import { ColumnTitle } from "../column/ColumnTitle";

export const RecipeColumnsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
