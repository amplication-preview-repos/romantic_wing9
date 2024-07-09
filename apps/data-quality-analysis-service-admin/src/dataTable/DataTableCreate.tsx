import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ColumnTitle } from "../column/ColumnTitle";
import { AnalysisResultTitle } from "../analysisResult/AnalysisResultTitle";
import { RecipeExecutionTitle } from "../recipeExecution/RecipeExecutionTitle";

export const DataTableCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="columns"
          reference="Column"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ColumnTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="analysisResults"
          reference="AnalysisResult"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AnalysisResultTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="recipeExecutions"
          reference="RecipeExecution"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RecipeExecutionTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
