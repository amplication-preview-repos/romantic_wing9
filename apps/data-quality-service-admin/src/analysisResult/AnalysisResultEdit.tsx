import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { TableTitle } from "../table/TableTitle";
import { RecipeTitle } from "../recipe/RecipeTitle";

export const AnalysisResultEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="executionDate" source="executionDate" />
        <div />
        <NumberInput step={1} label="issuesFound" source="issuesFound" />
        <div />
        <ReferenceInput source="table.id" reference="Table" label="table">
          <SelectInput optionText={TableTitle} />
        </ReferenceInput>
        <ReferenceInput source="recipe.id" reference="Recipe" label="recipe">
          <SelectInput optionText={RecipeTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
