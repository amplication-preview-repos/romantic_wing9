import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { TableTitle } from "../table/TableTitle";
import { RecipeTitle } from "../recipe/RecipeTitle";

export const AnalysisResultCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
