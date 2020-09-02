declare type Violation = {
    property: string;
    value: string;
    constraints: Record<string, unknown>;
};
export declare class CommandValidationError extends Error {
    readonly violations: Violation[];
    constructor();
    add(violation: Violation): void;
}
export {};
