import * as React from "react";
import { Edit, SimpleForm, EditProps, SelectArrayInput } from "react-admin";

export const AppUserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectArrayInput
          label="roles"
          source="roles"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
