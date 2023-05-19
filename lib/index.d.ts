export { JestMockExtended, GlobalConfig, mockDeep, MockProxy, DeepMockProxy, CalledWithMock, mockClear, mockReset, mockFn, stub, } from './Mock';
export declare const mock: <T, MockedReturn extends { [K in keyof T]: T[K] extends import("jest-mock").FunctionLike ? import("./Mock").CalledWithMock<T[K]> : T[K]; } & T = { [K in keyof T]: T[K] extends import("jest-mock").FunctionLike ? import("./Mock").CalledWithMock<T[K]> : T[K]; } & T>(mockImplementation?: import("ts-essentials").DeepPartial<T>, opts?: import("./Mock").MockOpts | undefined) => MockedReturn;
export declare const calledWithFn: <T extends import("jest-mock").FunctionLike>({ fallbackMockImplementation, }?: {
    fallbackMockImplementation?: T | undefined;
}) => import("./Mock").CalledWithMock<T>;
export * from './Matchers';
