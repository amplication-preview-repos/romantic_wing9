import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../types";

@ObjectType("ColumnStatsDtoObject")
class ColumnStatsDto {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    columnId!: string;

    @Field(() => GraphQLJSON)
    stats!: InputJsonValue;
}

export { ColumnStatsDto as ColumnStatsDto };