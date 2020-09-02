export interface Controller<P, R> {
    invoke(payload: P): Promise<R>;
}
