/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { RecipeExecutionWhereInput } from "./RecipeExecutionWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { RecipeExecutionOrderByInput } from "./RecipeExecutionOrderByInput";

@ArgsType()
class RecipeExecutionFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => RecipeExecutionWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => RecipeExecutionWhereInput, { nullable: true })
  @Type(() => RecipeExecutionWhereInput)
  where?: RecipeExecutionWhereInput;

  @ApiProperty({
    required: false,
    type: [RecipeExecutionOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [RecipeExecutionOrderByInput], { nullable: true })
  @Type(() => RecipeExecutionOrderByInput)
  orderBy?: Array<RecipeExecutionOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { RecipeExecutionFindManyArgs as RecipeExecutionFindManyArgs };
