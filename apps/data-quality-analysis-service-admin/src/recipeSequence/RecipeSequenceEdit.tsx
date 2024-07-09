import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const RecipeSequenceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
