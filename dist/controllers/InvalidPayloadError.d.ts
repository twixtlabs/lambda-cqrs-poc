declare type Violation = {
    property: string;
    value: string;
    constraints: Record<string, unknown>;
};
export declare class InvalidPayloadError extends Error {
    readonly violations: Violation[];
    constructor();
    add(violation: Violation): void;
}
export {};
