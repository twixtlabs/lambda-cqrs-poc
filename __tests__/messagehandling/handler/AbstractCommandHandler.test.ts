import { IsNotEmpty } from "class-validator";
import { CommandValidator } from "../../../src/utils/CommandValidator";
import { CommandValidationError } from "../../../src/utils/CommandValidationError";
import { Logger, NoOpLoggerFactory } from "../../../src/logging";
import { GenericCommandMessage } from "../../../src/messaging/GenericCommandMessage";
import { AbstractCommand } from "../../../src/command";
import { AbstractCommandHandler } from "../../../src/messagehandling/handler/AbstractCommandHandler";

jest.mock("../../../src/utils/CommandValidator");

class TestCommand extends AbstractCommand {
  static COMMAND_NAME = "TestCommand";
  commandName = TestCommand.COMMAND_NAME;
  @IsNotEmpty()
  prop: string;
}
interface TestCommandResponse {
  prop: string;
}
const testResponse: TestCommandResponse = {
  prop: "value",
};

const MockCommandValidator = <jest.Mock<CommandValidator<TestCommand>>>CommandValidator;
// Mock a validator that throws a validation error
const throwingCommandValidator = <jest.Mocked<CommandValidator<TestCommand>>>new MockCommandValidator();
throwingCommandValidator.transformAndValidate.mockImplementation(() => {
  throw new CommandValidationError();
});
const returningCommandValidator = <jest.Mocked<CommandValidator<TestCommand>>>new MockCommandValidator();
returningCommandValidator.transformAndValidate.mockImplementation((command) => {
  return command;
});

const noOpLogger = new NoOpLoggerFactory().createLogger();

class TestCommandHandler extends AbstractCommandHandler<TestCommand, TestCommandResponse> {
  constructor(logger: Logger, validator: CommandValidator<TestCommand>) {
    super({ logger, validator });
  }

  async execute(): Promise<TestCommandResponse> {
    return testResponse;
  }
}

it("validates", async () => {
  const invalidCommand = new TestCommand();
  const handler = new TestCommandHandler(noOpLogger, throwingCommandValidator);
  const validatorSpy = jest.spyOn(throwingCommandValidator, "transformAndValidate");
  const testCommandMessage = GenericCommandMessage.asCommandMessage(invalidCommand);
  await expect(handler.handleMessage(testCommandMessage)).rejects.toThrowError(new CommandValidationError());
  expect(validatorSpy).toHaveBeenCalled();
});

it("executes", async () => {
  const handler = new TestCommandHandler(noOpLogger, returningCommandValidator);
  const executeSpy = jest.spyOn(handler, "execute").mockImplementationOnce(async () => testResponse);
  const validCommand = new TestCommand();
  validCommand.prop = "value";
  const result = await handler.handleMessage(GenericCommandMessage.asCommandMessage(validCommand));
  expect(executeSpy).toHaveBeenCalledWith(validCommand);
  expect(result).toEqual(testResponse);
});
