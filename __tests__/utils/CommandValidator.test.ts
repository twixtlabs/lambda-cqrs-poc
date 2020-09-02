import { IsNumber, IsString } from "class-validator";
import { CommandValidator } from "../../src/utils/CommandValidator";
import { CommandValidationError } from "../../src/utils/CommandValidationError";

it("should throw InvalidPayloadError", () => {
  class TargetClass {
    @IsNumber()
    aNumber: number;
  }

  const validator = new CommandValidator(TargetClass);

  const invalidPayload = {
    aNumber: "string",
  } as unknown;

  expect(() => validator.transformAndValidate(invalidPayload)).toThrowError(CommandValidationError);
});

it("should return transformed class", () => {
  class TargetClass {
    @IsString()
    aString: string;

    getString(): string {
      return this.aString;
    }
  }
  const validator = new CommandValidator<TargetClass>(TargetClass);
  const payload = {
    aString: "theString",
  } as unknown;

  const transformedPayload = validator.transformAndValidate(payload as TargetClass);

  expect(transformedPayload.getString()).toEqual("theString");
});
