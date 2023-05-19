import { MatchersOrLiterals } from './Matchers';
import { DeepPartial } from 'ts-essentials';
import { jest } from '@jest/globals';
import type { FunctionLike } from 'jest-mock';
type ProxiedProperty = string | number | symbol;
export interface GlobalConfig {
    ignoreProps?: ProxiedProperty[];
}
export declare const JestMockExtended: {
    DEFAULT_CONFIG: GlobalConfig;
    configure: (config: GlobalConfig) => void;
    resetConfig: () => void;
};
export interface CalledWithMock<T extends FunctionLike> extends jest.Mock<T> {
    calledWith: (...args: [...Parameters<T>] | MatchersOrLiterals<[...Parameters<T>]>) => jest.Mock<T>;
}
export type MockProxy<T> = {
    [K in keyof T]: T[K] extends FunctionLike ? CalledWithMock<T[K]> : T[K];
} & T;
export type DeepMockProxy<T> = {
    [K in keyof T]: T[K] extends FunctionLike ? CalledWithMock<T[K]> : DeepMockProxy<T[K]>;
} & T;
export type DeepMockProxyWithFuncPropSupport<T> = {
    [K in keyof T]: T[K] extends FunctionLike ? CalledWithMock<T[K]> & DeepMockProxy<T[K]> : DeepMockProxy<T[K]>;
} & T;
export interface MockOpts {
    deep?: boolean;
    fallbackMockImplementation?: (...args: any[]) => any;
}
export declare const mockClear: (mock: MockProxy<any>) => any;
export declare const mockReset: (mock: MockProxy<any>) => any;
export declare function mockDeep<T>(opts: {
    funcPropSupport?: true;
    fallbackMockImplementation?: MockOpts['fallbackMockImplementation'];
}, mockImplementation?: DeepPartial<T>): DeepMockProxyWithFuncPropSupport<T>;
export declare function mockDeep<T>(mockImplementation?: DeepPartial<T>): DeepMockProxy<T>;
declare const mock: <T, MockedReturn extends { [K in keyof T]: T[K] extends FunctionLike ? CalledWithMock<T[K]> : T[K]; } & T = { [K in keyof T]: T[K] extends FunctionLike ? CalledWithMock<T[K]> : T[K]; } & T>(mockImplementation?: DeepPartial<T>, opts?: MockOpts) => MockedReturn;
export declare const mockFn: <T extends FunctionLike>() => CalledWithMock<T> & T;
export declare const stub: <T extends object>() => T;
export default mock;
