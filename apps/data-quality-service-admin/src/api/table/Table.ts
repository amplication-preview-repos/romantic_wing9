import { Database } from "../database/Database";
import { Column } from "../column/Column";
import { AnalysisResult } from "../analysisResult/AnalysisResult";

export type Table = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  creationDate: Date | null;
  lastUpdate: Date | null;
  owner: string | null;
  database?: Database | null;
  columns?: Array<Column>;
  analysisResults?: Array<AnalysisResult>;
};
