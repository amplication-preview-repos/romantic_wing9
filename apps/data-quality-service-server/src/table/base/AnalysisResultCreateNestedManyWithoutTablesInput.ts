/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { AnalysisResultWhereUniqueInput } from "../../analysisResult/base/AnalysisResultWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class AnalysisResultCreateNestedManyWithoutTablesInput {
  @Field(() => [AnalysisResultWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AnalysisResultWhereUniqueInput],
  })
  connect?: Array<AnalysisResultWhereUniqueInput>;
}

export { AnalysisResultCreateNestedManyWithoutTablesInput as AnalysisResultCreateNestedManyWithoutTablesInput };
