import { GenericDomainEventMessage } from "../../../src/messaging";
import { Logger, NoOpLoggerFactory } from "../../../src/logging";
import { Event } from "../../../src";
import { AbstractDomainEventHandler } from "../../../src/messagehandling/handler/AbstractDomainEventHandler";

class TestEvent implements Event {
  static EVENT_NAME = "TestEvent";
  readonly eventName = TestEvent.EVENT_NAME;
  readonly eventVersion: 0;
}
class TestEventHandler extends AbstractDomainEventHandler<TestEvent> {
  constructor(logger: Logger) {
    super({ logger });
  }

  async execute(): Promise<void> {
    return;
  }
}
const noOpLogger = new NoOpLoggerFactory().createLogger();
it("executes", async () => {
  const handler = new TestEventHandler(noOpLogger);
  const executeSpy = jest.spyOn(handler, "execute").mockImplementationOnce(async () => {
    return;
  });
  const validEvent = new TestEvent();
  const testEventMessage = GenericDomainEventMessage.asDomainEventMessage("AggregateType", validEvent, "identifier", 0);
  const result = await handler.handleMessage(testEventMessage);
  expect(executeSpy).toHaveBeenCalledWith(validEvent);
  expect(result).toBeUndefined();
});
