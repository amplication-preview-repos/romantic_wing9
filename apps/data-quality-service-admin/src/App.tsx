import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AppUserList } from "./appUser/AppUserList";
import { AppUserCreate } from "./appUser/AppUserCreate";
import { AppUserEdit } from "./appUser/AppUserEdit";
import { AppUserShow } from "./appUser/AppUserShow";
import { DatabaseList } from "./database/DatabaseList";
import { DatabaseCreate } from "./database/DatabaseCreate";
import { DatabaseEdit } from "./database/DatabaseEdit";
import { DatabaseShow } from "./database/DatabaseShow";
import { TableList } from "./table/TableList";
import { TableCreate } from "./table/TableCreate";
import { TableEdit } from "./table/TableEdit";
import { TableShow } from "./table/TableShow";
import { ColumnList } from "./column/ColumnList";
import { ColumnCreate } from "./column/ColumnCreate";
import { ColumnEdit } from "./column/ColumnEdit";
import { ColumnShow } from "./column/ColumnShow";
import { QualityRuleList } from "./qualityRule/QualityRuleList";
import { QualityRuleCreate } from "./qualityRule/QualityRuleCreate";
import { QualityRuleEdit } from "./qualityRule/QualityRuleEdit";
import { QualityRuleShow } from "./qualityRule/QualityRuleShow";
import { RecipeList } from "./recipe/RecipeList";
import { RecipeCreate } from "./recipe/RecipeCreate";
import { RecipeEdit } from "./recipe/RecipeEdit";
import { RecipeShow } from "./recipe/RecipeShow";
import { RecipeStepList } from "./recipeStep/RecipeStepList";
import { RecipeStepCreate } from "./recipeStep/RecipeStepCreate";
import { RecipeStepEdit } from "./recipeStep/RecipeStepEdit";
import { RecipeStepShow } from "./recipeStep/RecipeStepShow";
import { AnalysisResultList } from "./analysisResult/AnalysisResultList";
import { AnalysisResultCreate } from "./analysisResult/AnalysisResultCreate";
import { AnalysisResultEdit } from "./analysisResult/AnalysisResultEdit";
import { AnalysisResultShow } from "./analysisResult/AnalysisResultShow";
import { RecipeColumnsList } from "./recipeColumns/RecipeColumnsList";
import { RecipeColumnsCreate } from "./recipeColumns/RecipeColumnsCreate";
import { RecipeColumnsEdit } from "./recipeColumns/RecipeColumnsEdit";
import { RecipeColumnsShow } from "./recipeColumns/RecipeColumnsShow";
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
        title={"DataQualityService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="AppUser"
          list={AppUserList}
          edit={AppUserEdit}
          create={AppUserCreate}
          show={AppUserShow}
        />
        <Resource
          name="Database"
          list={DatabaseList}
          edit={DatabaseEdit}
          create={DatabaseCreate}
          show={DatabaseShow}
        />
        <Resource
          name="Table"
          list={TableList}
          edit={TableEdit}
          create={TableCreate}
          show={TableShow}
        />
        <Resource
          name="Column"
          list={ColumnList}
          edit={ColumnEdit}
          create={ColumnCreate}
          show={ColumnShow}
        />
        <Resource
          name="QualityRule"
          list={QualityRuleList}
          edit={QualityRuleEdit}
          create={QualityRuleCreate}
          show={QualityRuleShow}
        />
        <Resource
          name="Recipe"
          list={RecipeList}
          edit={RecipeEdit}
          create={RecipeCreate}
          show={RecipeShow}
        />
        <Resource
          name="RecipeStep"
          list={RecipeStepList}
          edit={RecipeStepEdit}
          create={RecipeStepCreate}
          show={RecipeStepShow}
        />
        <Resource
          name="AnalysisResult"
          list={AnalysisResultList}
          edit={AnalysisResultEdit}
          create={AnalysisResultCreate}
          show={AnalysisResultShow}
        />
        <Resource
          name="RecipeColumns"
          list={RecipeColumnsList}
          edit={RecipeColumnsEdit}
          create={RecipeColumnsCreate}
          show={RecipeColumnsShow}
        />
      </Admin>
    </div>
  );
};

export default App;
