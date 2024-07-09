import { Module } from "@nestjs/common";
import { ColumnModule } from "./column/column.module";
import { DataTableModule } from "./dataTable/dataTable.module";
import { RecipeModule } from "./recipe/recipe.module";
import { AnalysisResultModule } from "./analysisResult/analysisResult.module";
import { UserModule } from "./user/user.module";
import { RecipeSequenceModule } from "./recipeSequence/recipeSequence.module";
import { RecipeExecutionModule } from "./recipeExecution/recipeExecution.module";
import { DataProcessingModule } from "./DataProcessing/dataprocessing.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    ColumnModule,
    DataTableModule,
    RecipeModule,
    AnalysisResultModule,
    UserModule,
    RecipeSequenceModule,
    RecipeExecutionModule,
    DataProcessingModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
