import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  TextInput,
  BooleanInput,
  ReferenceInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { TableTitle } from "../table/TableTitle";
import { RecipeColumnsTitle } from "../recipeColumns/RecipeColumnsTitle";

export const ColumnEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="dataType"
          label="dataType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="name" source="name" />
        <BooleanInput label="isUnique" source="isUnique" />
        <BooleanInput label="isNullable" source="isNullable" />
        <ReferenceInput source="table.id" reference="Table" label="table">
          <SelectInput optionText={TableTitle} />
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
