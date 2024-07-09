import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../types";

@ObjectType("ResultDtoWithColorObject")
class ResultDtoWithColor {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    resultId!: string;

    @Field(() => GraphQLJSON)
    resultDetails!: InputJsonValue;

    @Field(() => String, {
        nullable: true
    })
    @ApiProperty({
        required: false,
        type: () => String
    })
    @Type(() => String)
    colorCode?: string;
}

export { ResultDtoWithColor as ResultDtoWithColor };