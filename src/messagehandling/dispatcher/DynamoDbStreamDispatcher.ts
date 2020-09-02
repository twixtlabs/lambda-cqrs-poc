import * as lambda from "aws-lambda";
import { AbstractDispatcher } from "../AbstractDispatcher";
import { HandlerMapping } from "../HandlerMapping";
import { DynamoDbStreamRecordHandlerAdapter } from "../adapter/DynamoDbStreamRecordHandlerAdapter";
import * as AWS from "aws-sdk";

/**
 * Dispatcher implementation for when source event is DynamoDbStreamEvent
 */
export class DynamoDbStreamDispatcher extends AbstractDispatcher {
  constructor({ mappings }: { mappings: HandlerMapping[] }) {
    super({
      mappings,
      adapters: [new DynamoDbStreamRecordHandlerAdapter()],
    });
  }

  async doDispatch(event: lambda.DynamoDBStreamEvent): Promise<void> {
    const insertRecords = event.Records.filter((record) => {
      return record.eventName === "INSERT";
    });
    for (const record of insertRecords) {
      const dbItem = record.dynamodb?.NewImage;
      const item = dbItem ? (AWS.DynamoDB.Converter.unmarshall(dbItem) as Record<string, unknown>) : null;

      // Find the first adapter in the list that can handle the event
      const adapter = item ? this.getAdapter(item) : null;
      const handler = item ? this.getHandler(item) : null;
      if (adapter && handler && item) {
        await adapter.handle(item, handler);
      } else {
        // Ignore entries we can't handle
      }
    }
    return;
  }
}
