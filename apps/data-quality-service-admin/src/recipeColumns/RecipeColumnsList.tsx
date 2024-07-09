import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { RECIPESTEP_TITLE_FIELD } from "../recipeStep/RecipeStepTitle";
import { COLUMN_TITLE_FIELD } from "../column/ColumnTitle";

export const RecipeColumnsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"RecipeColumnsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
