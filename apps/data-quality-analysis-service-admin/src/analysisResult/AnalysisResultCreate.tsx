import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { RecipeTitle } from "../recipe/RecipeTitle";
import { DataTableTitle } from "../dataTable/DataTableTitle";

export const AnalysisResultCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <ReferenceInput source="recipe.id" reference="Recipe" label="recipe">
          <SelectInput optionText={RecipeTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="dataTable.id"
          reference="DataTable"
          label="dataTable"
        >
          <SelectInput optionText={DataTableTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
