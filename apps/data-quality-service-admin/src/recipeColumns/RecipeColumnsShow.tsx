import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { RECIPESTEP_TITLE_FIELD } from "../recipeStep/RecipeStepTitle";
import { COLUMN_TITLE_FIELD } from "../column/ColumnTitle";

export const RecipeColumnsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField
          label="recipeStep"
          source="recipestep.id"
          reference="RecipeStep"
        >
          <TextField source={RECIPESTEP_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="column" source="column.id" reference="Column">
          <TextField source={COLUMN_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
