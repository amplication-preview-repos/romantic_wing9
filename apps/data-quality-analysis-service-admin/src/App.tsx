import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ColumnList } from "./column/ColumnList";
import { ColumnCreate } from "./column/ColumnCreate";
import { ColumnEdit } from "./column/ColumnEdit";
import { ColumnShow } from "./column/ColumnShow";
import { DataTableList } from "./dataTable/DataTableList";
import { DataTableCreate } from "./dataTable/DataTableCreate";
import { DataTableEdit } from "./dataTable/DataTableEdit";
import { DataTableShow } from "./dataTable/DataTableShow";
import { RecipeList } from "./recipe/RecipeList";
import { RecipeCreate } from "./recipe/RecipeCreate";
import { RecipeEdit } from "./recipe/RecipeEdit";
import { RecipeShow } from "./recipe/RecipeShow";
import { AnalysisResultList } from "./analysisResult/AnalysisResultList";
import { AnalysisResultCreate } from "./analysisResult/AnalysisResultCreate";
import { AnalysisResultEdit } from "./analysisResult/AnalysisResultEdit";
import { AnalysisResultShow } from "./analysisResult/AnalysisResultShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { RecipeSequenceList } from "./recipeSequence/RecipeSequenceList";
import { RecipeSequenceCreate } from "./recipeSequence/RecipeSequenceCreate";
import { RecipeSequenceEdit } from "./recipeSequence/RecipeSequenceEdit";
import { RecipeSequenceShow } from "./recipeSequence/RecipeSequenceShow";
import { RecipeExecutionList } from "./recipeExecution/RecipeExecutionList";
import { RecipeExecutionCreate } from "./recipeExecution/RecipeExecutionCreate";
import { RecipeExecutionEdit } from "./recipeExecution/RecipeExecutionEdit";
import { RecipeExecutionShow } from "./recipeExecution/RecipeExecutionShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"DataQualityAnalysisService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Column"
          list={ColumnList}
          edit={ColumnEdit}
          create={ColumnCreate}
          show={ColumnShow}
        />
        <Resource
          name="DataTable"
          list={DataTableList}
          edit={DataTableEdit}
          create={DataTableCreate}
          show={DataTableShow}
        />
        <Resource
          name="Recipe"
          list={RecipeList}
          edit={RecipeEdit}
          create={RecipeCreate}
          show={RecipeShow}
        />
        <Resource
          name="AnalysisResult"
          list={AnalysisResultList}
          edit={AnalysisResultEdit}
          create={AnalysisResultCreate}
          show={AnalysisResultShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="RecipeSequence"
          list={RecipeSequenceList}
          edit={RecipeSequenceEdit}
          create={RecipeSequenceCreate}
          show={RecipeSequenceShow}
        />
        <Resource
          name="RecipeExecution"
          list={RecipeExecutionList}
          edit={RecipeExecutionEdit}
          create={RecipeExecutionCreate}
          show={RecipeExecutionShow}
        />
      </Admin>
    </div>
  );
};

export default App;
