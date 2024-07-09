import { JsonValue } from "type-fest";
import { Table } from "../table/Table";
import { Recipe } from "../recipe/Recipe";

export type AnalysisResult = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  executionDate: Date | null;
  resultData: JsonValue;
  issuesFound: number | null;
  appliedFilters: JsonValue;
  table?: Table | null;
  recipe?: Recipe | null;
};
