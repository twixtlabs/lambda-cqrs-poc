/**
 * Dispatcher interface
 *
 * Front Controller, responsible for directing income messages to appropriate handler
 * Selecting and invoke the correct adapter for a message
 */
export interface Dispatcher {
  doDispatch(event: unknown): Promise<unknown>;
}
