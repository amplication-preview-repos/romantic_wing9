import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { RecipeStepTitle } from "../recipeStep/RecipeStepTitle";
import { AnalysisResultTitle } from "../analysisResult/AnalysisResultTitle";

export const RecipeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <DateTimeInput label="creationDate" source="creationDate" />
        <TextInput label="name" source="name" />
        <TextInput label="owner" source="owner" />
        <ReferenceArrayInput
          source="recipeSteps"
          reference="RecipeStep"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RecipeStepTitle} />
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
    </Edit>
  );
};
