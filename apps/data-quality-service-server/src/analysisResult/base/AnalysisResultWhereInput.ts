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
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { TableWhereUniqueInput } from "../../table/base/TableWhereUniqueInput";
import { RecipeWhereUniqueInput } from "../../recipe/base/RecipeWhereUniqueInput";

@InputType()
class AnalysisResultWhereInput {
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
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  executionDate?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: JsonFilter,
  })
  @Type(() => JsonFilter)
  @IsOptional()
  @Field(() => JsonFilter, {
    nullable: true,
  })
  resultData?: JsonFilter;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  issuesFound?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: JsonFilter,
  })
  @Type(() => JsonFilter)
  @IsOptional()
  @Field(() => JsonFilter, {
    nullable: true,
  })
  appliedFilters?: JsonFilter;

  @ApiProperty({
    required: false,
    type: () => TableWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TableWhereUniqueInput)
  @IsOptional()
  @Field(() => TableWhereUniqueInput, {
    nullable: true,
  })
  table?: TableWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => RecipeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RecipeWhereUniqueInput)
  @IsOptional()
  @Field(() => RecipeWhereUniqueInput, {
    nullable: true,
  })
  recipe?: RecipeWhereUniqueInput;
}

export { AnalysisResultWhereInput as AnalysisResultWhereInput };
