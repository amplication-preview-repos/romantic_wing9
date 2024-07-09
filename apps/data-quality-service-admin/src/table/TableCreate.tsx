import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { DatabaseTitle } from "../database/DatabaseTitle";
import { ColumnTitle } from "../column/ColumnTitle";
import { AnalysisResultTitle } from "../analysisResult/AnalysisResultTitle";

export const TableCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="description" multiline source="description" />
        <DateTimeInput label="creationDate" source="creationDate" />
        <DateTimeInput label="lastUpdate" source="lastUpdate" />
        <TextInput label="owner" source="owner" />
        <ReferenceInput
          source="database.id"
          reference="Database"
          label="database"
        >
          <SelectInput optionText={DatabaseTitle} />
        </ReferenceInput>
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
      </SimpleForm>
    </Create>
  );
};
