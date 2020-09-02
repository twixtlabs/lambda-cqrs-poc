import { Command } from "./Command";
import { IsNumber, IsOptional, IsString, MinLength } from "class-validator";

export abstract class AbstractCommand implements Command {
  @IsString()
  @MinLength(4)
  commandName: string;
  @IsOptional()
  targetAggregateIdentifier?: string;
  @IsNumber()
  @IsOptional()
  targetAggregateVersion?: number;
}
