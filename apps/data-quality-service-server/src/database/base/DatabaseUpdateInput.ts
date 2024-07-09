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
import { IsJSONValue } from "../../validators";
import {
  IsOptional,
  IsString,
  MaxLength,
  IsEnum,
  ValidateNested,
} from "class-validator";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { EnumDatabaseTypeField } from "./EnumDatabaseTypeField";
import { TableUpdateManyWithoutDatabasesInput } from "./TableUpdateManyWithoutDatabasesInput";
import { Type } from "class-transformer";

@InputType()
class DatabaseUpdateInput {
  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  connectionDetails?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumDatabaseTypeField,
  })
  @IsEnum(EnumDatabaseTypeField)
  @IsOptional()
  @Field(() => EnumDatabaseTypeField, {
    nullable: true,
  })
  typeField?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: () => TableUpdateManyWithoutDatabasesInput,
  })
  @ValidateNested()
  @Type(() => TableUpdateManyWithoutDatabasesInput)
  @IsOptional()
  @Field(() => TableUpdateManyWithoutDatabasesInput, {
    nullable: true,
  })
  tables?: TableUpdateManyWithoutDatabasesInput;
}

export { DatabaseUpdateInput as DatabaseUpdateInput };
