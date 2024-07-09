import * as React from "react";
import { Create, SimpleForm, CreateProps, SelectArrayInput } from "react-admin";

export const AppUserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectArrayInput
          label="roles"
          source="roles"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
