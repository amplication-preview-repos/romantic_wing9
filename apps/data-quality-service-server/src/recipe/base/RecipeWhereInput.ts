/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { RecipeStepListRelationFilter } from "../../recipeStep/base/RecipeStepListRelationFilter";
import { AnalysisResultListRelationFilter } from "../../analysisResult/base/AnalysisResultListRelationFilter";

@InputType()
class RecipeWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  description?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  creationDate?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  owner?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => RecipeStepListRelationFilter,
  })
  @ValidateNested()
  @Type(() => RecipeStepListRelationFilter)
  @IsOptional()
  @Field(() => RecipeStepListRelationFilter, {
    nullable: true,
  })
  recipeSteps?: RecipeStepListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => AnalysisResultListRelationFilter,
  })
  @ValidateNested()
  @Type(() => AnalysisResultListRelationFilter)
  @IsOptional()
  @Field(() => AnalysisResultListRelationFilter, {
    nullable: true,
  })
  analysisResults?: AnalysisResultListRelationFilter;
}

export { RecipeWhereInput as RecipeWhereInput };
