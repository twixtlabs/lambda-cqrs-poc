import { AbstractValidatingController } from "./AbstractValidatingController";
import { Query } from "../queryhandling/Query";
export declare abstract class AbstractQueryController<P extends Query, R> extends AbstractValidatingController<P, R> {
    abstract execute(query: P): Promise<R>;
}
