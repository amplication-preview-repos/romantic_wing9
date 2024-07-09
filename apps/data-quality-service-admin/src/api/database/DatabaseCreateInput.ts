import { InputJsonValue } from "../../types";
import { TableCreateNestedManyWithoutDatabasesInput } from "./TableCreateNestedManyWithoutDatabasesInput";

export type DatabaseCreateInput = {
  connectionDetails?: InputJsonValue;
  name?: string | null;
  description?: string | null;
  typeField?: "Option1" | null;
  tables?: TableCreateNestedManyWithoutDatabasesInput;
};
