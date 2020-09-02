/**
 * Events represent something that occurred that is of interest/importance to other components.
 * They typically convey/carry information relevant for other components to take action based on the
 * occurrence.
 */
export interface Event {
  /**
   * name of the event
   */
  readonly eventName: string;
  /**
   * version of the event
   *
   * Events will typically change over time, however they can be stored for long periods of time, and in many
   * circumstances, indefinitley. "Versioning" event's allows handlers/processors are mechanisim by which to handle
   * changes.
   *
   * Note: In almost all scenarios, you should really be able to apply "sensible" defaults for old events when adding properties.
   * If there is no simple way to do this, you probably actually have a completely *new* event, not a new version of
   * an existing event.
   */
  readonly eventVersion: number;
}
