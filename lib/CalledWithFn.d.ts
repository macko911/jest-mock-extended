import { CalledWithMock } from './Mock';
import type { FunctionLike } from 'jest-mock';
export declare const calledWithFn: <T extends FunctionLike>({ fallbackMockImplementation, }?: {
    fallbackMockImplementation?: T | undefined;
}) => CalledWithMock<T>;
export default calledWithFn;
