type Violation = {
  property: string;
  value: string;
  constraints: Record<string, unknown>;
};
export class CommandValidationError extends Error {
  public readonly violations: Violation[] = [];
  constructor() {
    super("Command validation failed");
    Object.setPrototypeOf(this, CommandValidationError.prototype);
  }

  add(violation: Violation): void {
    this.violations.push(violation);
  }
}
