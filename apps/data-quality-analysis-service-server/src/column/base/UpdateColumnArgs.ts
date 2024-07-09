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
import { ColumnWhereUniqueInput } from "./ColumnWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ColumnUpdateInput } from "./ColumnUpdateInput";

@ArgsType()
class UpdateColumnArgs {
  @ApiProperty({
    required: true,
    type: () => ColumnWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ColumnWhereUniqueInput)
  @Field(() => ColumnWhereUniqueInput, { nullable: false })
  where!: ColumnWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ColumnUpdateInput,
  })
  @ValidateNested()
  @Type(() => ColumnUpdateInput)
  @Field(() => ColumnUpdateInput, { nullable: false })
  data!: ColumnUpdateInput;
}

export { UpdateColumnArgs as UpdateColumnArgs };
