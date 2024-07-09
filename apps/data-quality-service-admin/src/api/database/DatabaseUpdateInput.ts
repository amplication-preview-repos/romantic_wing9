import { InputJsonValue } from "../../types";
import { TableUpdateManyWithoutDatabasesInput } from "./TableUpdateManyWithoutDatabasesInput";

export type DatabaseUpdateInput = {
  connectionDetails?: InputJsonValue;
  name?: string | null;
  description?: string | null;
  typeField?: "Option1" | null;
  tables?: TableUpdateManyWithoutDatabasesInput;
};
