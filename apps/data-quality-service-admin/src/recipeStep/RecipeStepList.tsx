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
import { QUALITYRULE_TITLE_FIELD } from "../qualityRule/QualityRuleTitle";
import { RECIPE_TITLE_FIELD } from "../recipe/RecipeTitle";

export const RecipeStepList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"RecipeSteps"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="order" source="order" />
        <TextField label="parameters" source="parameters" />
        <ReferenceField
          label="QualityRule"
          source="qualityrule.id"
          reference="QualityRule"
        >
          <TextField source={QUALITYRULE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Recipe" source="recipe.id" reference="Recipe">
          <TextField source={RECIPE_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
