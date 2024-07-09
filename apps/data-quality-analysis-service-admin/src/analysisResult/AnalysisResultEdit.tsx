import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { RecipeTitle } from "../recipe/RecipeTitle";
import { DataTableTitle } from "../dataTable/DataTableTitle";

export const AnalysisResultEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
