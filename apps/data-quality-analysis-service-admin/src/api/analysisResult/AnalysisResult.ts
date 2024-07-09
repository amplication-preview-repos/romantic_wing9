import { JsonValue } from "type-fest";
import { Recipe } from "../recipe/Recipe";
import { DataTable } from "../dataTable/DataTable";

export type AnalysisResult = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  results: JsonValue;
  recipe?: Recipe | null;
  dataTable?: DataTable | null;
};
