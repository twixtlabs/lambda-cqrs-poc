import { IsString, MinLength } from "class-validator";
import { Query } from "./Query";

export abstract class AbstractQuery implements Query {
  @IsString()
  @MinLength(4)
  queryName: string;
}
