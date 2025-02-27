"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test6 = void 0;
const Mock_1 = __importStar(require("./Mock"));
const Matchers_1 = require("./Matchers");
const CalledWithFn_1 = __importDefault(require("./CalledWithFn"));
const globals_1 = require("@jest/globals");
const assert_1 = require("assert");
class Test1 {
    constructor(id) {
        this.deepProp = new Test2();
        this.id = id;
        this.anotherPart = id;
    }
    ofAnother(test) {
        return test.getNumber();
    }
    getNumber() {
        return this.id;
    }
    getNumberWithMockArg(mock) {
        return this.id;
    }
    getSomethingWithArgs(arg1, arg2) {
        return this.id;
    }
    getSomethingWithMoreArgs(arg1, arg2, arg3) {
        return this.id;
    }
}
class Test2 {
    constructor() {
        this.deeperProp = new Test3();
    }
    getNumber(num) {
        return num * 2;
    }
    getAnotherString(str) {
        return `${str} another string`;
    }
}
class Test3 {
    getNumber(num) {
        return num ^ 2;
    }
}
class Test4 {
    constructor(test1, int) { }
}
class Test6 {
    constructor(funcValueProp, id) {
        this.id = id;
        this.funcValueProp = funcValueProp;
    }
}
exports.Test6 = Test6;
(0, globals_1.describe)('jest-mock-extended', () => {
    (0, globals_1.test)('Can be assigned back to itself even when there are private parts', () => {
        // No TS errors here
        const mockObj = (0, Mock_1.default)();
        // No error here.
        new Test1(1).ofAnother(mockObj);
        (0, globals_1.expect)(mockObj.getNumber).toHaveBeenCalledTimes(1);
    });
    (0, globals_1.test)('Check that a jest.fn() is created without any invocation to the mock method', () => {
        const mockObj = (0, Mock_1.default)();
        (0, globals_1.expect)(mockObj.getNumber).toHaveBeenCalledTimes(0);
    });
    (0, globals_1.test)('Check that invocations are registered', () => {
        const mockObj = (0, Mock_1.default)();
        mockObj.getNumber();
        mockObj.getNumber();
        (0, globals_1.expect)(mockObj.getNumber).toHaveBeenCalledTimes(2);
    });
    (0, globals_1.test)('Can mock a return value', () => {
        const mockObj = (0, Mock_1.default)();
        mockObj.getNumber.mockReturnValue(12);
        (0, globals_1.expect)(mockObj.getNumber()).toBe(12);
    });
    (0, globals_1.test)('Can specify args', () => {
        const mockObj = (0, Mock_1.default)();
        mockObj.getSomethingWithArgs(1, 2);
        (0, globals_1.expect)(mockObj.getSomethingWithArgs).toBeCalledWith(1, 2);
    });
    (0, globals_1.test)('Can specify calledWith', () => {
        const mockObj = (0, Mock_1.default)();
        mockObj.getSomethingWithArgs.calledWith(1, 2).mockReturnValue(1);
        (0, globals_1.expect)(mockObj.getSomethingWithArgs(1, 2)).toBe(1);
    });
    (0, globals_1.test)('Can specify fallbackMockImplementation', () => {
        const mockObj = (0, Mock_1.default)({}, {
            fallbackMockImplementation: () => {
                throw new Error('not mocked');
            },
        });
        (0, globals_1.expect)(() => mockObj.getSomethingWithArgs(1, 2)).toThrowError('not mocked');
    });
    (0, globals_1.test)('Can specify multiple calledWith', () => {
        const mockObj = (0, Mock_1.default)();
        mockObj.getSomethingWithArgs.calledWith(1, 2).mockReturnValue(3);
        mockObj.getSomethingWithArgs.calledWith(6, 7).mockReturnValue(13);
        (0, globals_1.expect)(mockObj.getSomethingWithArgs(1, 2)).toBe(3);
        (0, globals_1.expect)(mockObj.getSomethingWithArgs(6, 7)).toBe(13);
    });
    (0, globals_1.test)('Can set props', () => {
        const mockObj = (0, Mock_1.default)();
        mockObj.id = 17;
        (0, globals_1.expect)(mockObj.id).toBe(17);
    });
    (0, globals_1.test)('Can set false and null boolean props', () => {
        const mockObj = (0, Mock_1.default)({
            someValue: false,
        });
        const mockObj2 = (0, Mock_1.default)({
            someValue: null,
        });
        (0, globals_1.expect)(mockObj.someValue).toBe(false);
        (0, globals_1.expect)(mockObj2.someValue).toBe(null);
    });
    (0, globals_1.test)('can set undefined explicitly', () => {
        const mockObj = (0, Mock_1.default)({
            someValue: undefined, // this is intentionally set to undefined
        });
        (0, globals_1.expect)(mockObj.someValue).toBe(undefined);
    });
    (0, globals_1.test)('Equals self', () => {
        const mockObj = (0, Mock_1.default)();
        (0, globals_1.expect)(mockObj).toBe(mockObj);
        (0, globals_1.expect)(mockObj).toEqual(mockObj);
        const spy = globals_1.jest.fn();
        spy(mockObj);
        (0, globals_1.expect)(spy).toHaveBeenCalledWith(mockObj);
    });
    (0, globals_1.describe)('Mimic Type', () => {
        (0, globals_1.test)('can use MockProxy in place of Mock Type', () => {
            const t1 = (0, Mock_1.default)();
            const i1 = (0, Mock_1.default)();
            // no TS error
            const f = new Test4(t1, i1);
        });
    });
    (0, globals_1.describe)('calledWith', () => {
        (0, globals_1.test)('can use calledWith without mock', () => {
            const mockFunc = (0, CalledWithFn_1.default)();
            mockFunc.calledWith((0, Matchers_1.anyNumber)(), (0, Matchers_1.anyNumber)()).mockReturnValue(3);
            (0, globals_1.expect)(mockFunc(1, 2)).toBe(3);
        });
        (0, globals_1.test)('Can specify matchers', () => {
            const mockObj = (0, Mock_1.default)();
            mockObj.getSomethingWithArgs.calledWith((0, Matchers_1.anyNumber)(), (0, Matchers_1.anyNumber)()).mockReturnValue(3);
            (0, globals_1.expect)(mockObj.getSomethingWithArgs(1, 2)).toBe(3);
        });
        (0, globals_1.test)('does not match when one arg does not match Matcher', () => {
            const mockObj = (0, Mock_1.default)();
            mockObj.getSomethingWithArgs.calledWith((0, Matchers_1.anyNumber)(), (0, Matchers_1.anyNumber)()).mockReturnValue(3);
            // @ts-ignore
            (0, globals_1.expect)(mockObj.getSomethingWithArgs('1', 2)).toBe(undefined);
        });
        (0, globals_1.test)('can use literals', () => {
            const mockObj = (0, Mock_1.default)();
            mockObj.getSomethingWithArgs.calledWith(1, 2).mockReturnValue(3);
            (0, globals_1.expect)(mockObj.getSomethingWithArgs(1, 2)).toBe(3);
        });
        (0, globals_1.test)('can mix Matchers with literals', () => {
            const mockObj = (0, Mock_1.default)();
            mockObj.getSomethingWithArgs.calledWith(1, (0, Matchers_1.anyNumber)()).mockReturnValue(3);
            (0, globals_1.expect)(mockObj.getSomethingWithArgs(1, 2)).toBe(3);
        });
        (0, globals_1.test)('supports multiple calledWith', () => {
            const mockObj = (0, Mock_1.default)();
            mockObj.getSomethingWithArgs.calledWith(2, (0, Matchers_1.anyNumber)()).mockReturnValue(4);
            mockObj.getSomethingWithArgs.calledWith(1, (0, Matchers_1.anyNumber)()).mockReturnValue(3);
            mockObj.getSomethingWithArgs.calledWith(6, (0, Matchers_1.anyNumber)()).mockReturnValue(7);
            (0, globals_1.expect)(mockObj.getSomethingWithArgs(2, 2)).toBe(4);
            (0, globals_1.expect)(mockObj.getSomethingWithArgs(1, 2)).toBe(3);
            (0, globals_1.expect)(mockObj.getSomethingWithArgs(6, 2)).toBe(7);
            (0, globals_1.expect)(mockObj.getSomethingWithArgs(7, 2)).toBe(undefined);
        });
        (0, globals_1.test)('supports overriding with same args', () => {
            const mockObj = (0, Mock_1.default)();
            mockObj.getSomethingWithArgs.calledWith(1, 2).mockReturnValue(4);
            mockObj.getSomethingWithArgs.calledWith(1, 2).mockReturnValue(3);
            (0, globals_1.expect)(mockObj.getSomethingWithArgs(1, 2)).toBe(3);
        });
        (0, globals_1.test)('Support jest matcher', () => {
            const mockObj = (0, Mock_1.default)();
            mockObj.getSomethingWithArgs
                // @ts-expect-error Type 'AsymmetricMatcher_2' is missing the following properties from type 'Matcher<number>': $$typeof, description
                .calledWith(globals_1.expect.anything(), globals_1.expect.anything())
                .mockReturnValue(3);
            (0, globals_1.expect)(mockObj.getSomethingWithArgs(1, 2)).toBe(3);
        });
        (0, globals_1.test)('Suport mix Matchers with literals and with jest matcher', () => {
            const mockObj = (0, Mock_1.default)();
            mockObj.getSomethingWithMoreArgs
                // @ts-expect-error Type 'AsymmetricMatcher_2' is not assignable to type 'number | Matcher<number>'
                .calledWith((0, Matchers_1.anyNumber)(), globals_1.expect.anything(), 3)
                .mockReturnValue(4);
            (0, globals_1.expect)(mockObj.getSomethingWithMoreArgs(1, 2, 3)).toBe(4);
            (0, globals_1.expect)(mockObj.getSomethingWithMoreArgs(1, 2, 4)).toBeUndefined;
        });
        (0, globals_1.test)('Can use calledWith with an other mock', () => {
            const mockObj = (0, Mock_1.default)();
            const mockArg = (0, Mock_1.default)();
            mockObj.getNumberWithMockArg.calledWith(mockArg).mockReturnValue(4);
            (0, globals_1.expect)(mockObj.getNumberWithMockArg(mockArg)).toBe(4);
        });
    });
    (0, globals_1.describe)('Matchers with toHaveBeenCalledWith', () => {
        (0, globals_1.test)('matchers allow all args to be Matcher based', () => {
            const mockObj = (0, Mock_1.default)();
            mockObj.getSomethingWithArgs(2, 4);
            (0, globals_1.expect)(mockObj.getSomethingWithArgs).toHaveBeenCalledWith((0, Matchers_1.anyNumber)(), (0, Matchers_1.anyNumber)());
        });
        (0, globals_1.test)('matchers allow for a mix of Matcher and literal', () => {
            const mockObj = (0, Mock_1.default)();
            mockObj.getSomethingWithArgs(2, 4);
            (0, globals_1.expect)(mockObj.getSomethingWithArgs).toHaveBeenCalledWith((0, Matchers_1.anyNumber)(), 4);
        });
        (0, globals_1.test)('matchers allow for not.toHaveBeenCalledWith', () => {
            const mockObj = (0, Mock_1.default)();
            mockObj.getSomethingWithArgs(2, 4);
            (0, globals_1.expect)(mockObj.getSomethingWithArgs).not.toHaveBeenCalledWith((0, Matchers_1.anyNumber)(), 5);
        });
    });
    (0, globals_1.describe)('Deep mock support', () => {
        (0, globals_1.test)('can deep mock members', () => {
            const mockObj = (0, Mock_1.mockDeep)();
            mockObj.deepProp.getNumber.calledWith(1).mockReturnValue(4);
            (0, globals_1.expect)(mockObj.deepProp.getNumber(1)).toBe(4);
        });
        (0, globals_1.test)('three level deep mock', () => {
            const mockObj = (0, Mock_1.mockDeep)();
            mockObj.deepProp.deeperProp.getNumber.calledWith(1).mockReturnValue(4);
            (0, globals_1.expect)(mockObj.deepProp.deeperProp.getNumber(1)).toBe(4);
        });
        (0, globals_1.test)('maintains API for deep mocks', () => {
            const mockObj = (0, Mock_1.mockDeep)();
            mockObj.deepProp.getNumber(100);
            (0, globals_1.expect)(mockObj.deepProp.getNumber.mock.calls[0][0]).toBe(100);
        });
        (0, globals_1.test)('non deep expectation work as expected', () => {
            const mockObj = (0, Mock_1.mockDeep)();
            new Test1(1).ofAnother(mockObj);
            (0, globals_1.expect)(mockObj.getNumber).toHaveBeenCalledTimes(1);
        });
        (0, globals_1.test)('deep expectation work as expected', () => {
            const mockObj = (0, Mock_1.mockDeep)();
            mockObj.deepProp.getNumber(2);
            (0, globals_1.expect)(mockObj.deepProp.getNumber).toHaveBeenCalledTimes(1);
        });
        (0, globals_1.test)('fallback mock implementation can be overridden', () => {
            const mockObj = (0, Mock_1.mockDeep)({
                fallbackMockImplementation: () => {
                    throw new Error('not mocked');
                },
            });
            mockObj.deepProp.getAnotherString.calledWith('foo'); // no mock implementation
            (0, globals_1.expect)(() => mockObj.getNumber()).toThrowError('not mocked');
            (0, globals_1.expect)(() => mockObj.deepProp.getAnotherString('foo')).toThrowError('not mocked');
        });
        (0, globals_1.test)('fallback mock implementation can be overridden while also providing a mock implementation', () => {
            const mockObj = (0, Mock_1.mockDeep)({
                fallbackMockImplementation: () => {
                    throw new Error('not mocked');
                },
            }, {
                getNumber: () => {
                    return 150;
                },
            });
            mockObj.deepProp.getAnotherString.calledWith('?').mockReturnValue('mocked');
            (0, globals_1.expect)(mockObj.getNumber()).toBe(150);
            (0, globals_1.expect)(mockObj.deepProp.getAnotherString('?')).toBe('mocked');
            (0, globals_1.expect)(() => mockObj.deepProp.getNumber(1)).toThrowError('not mocked');
            (0, globals_1.expect)(() => mockObj.deepProp.getAnotherString('!')).toThrowError('not mocked');
        });
    });
    (0, globals_1.describe)('Deep mock support for class variables which are functions but also have nested properties and functions', () => {
        (0, globals_1.test)('can deep mock members', () => {
            const mockObj = (0, Mock_1.mockDeep)({ funcPropSupport: true });
            const input = new Test1(1);
            mockObj.funcValueProp.nonDeepProp.calledWith(input).mockReturnValue(4);
            (0, globals_1.expect)(mockObj.funcValueProp.nonDeepProp(input)).toBe(4);
        });
        (0, globals_1.test)('three or more level deep mock', () => {
            const mockObj = (0, Mock_1.mockDeep)({ funcPropSupport: true });
            mockObj.funcValueProp.deepProp.deeperProp.getNumber.calledWith(1).mockReturnValue(4);
            (0, globals_1.expect)(mockObj.funcValueProp.deepProp.deeperProp.getNumber(1)).toBe(4);
        });
        (0, globals_1.test)('maintains API for deep mocks', () => {
            const mockObj = (0, Mock_1.mockDeep)({ funcPropSupport: true });
            mockObj.funcValueProp.deepProp.getNumber(100);
            (0, globals_1.expect)(mockObj.funcValueProp.deepProp.getNumber.mock.calls[0][0]).toBe(100);
        });
        (0, globals_1.test)('deep expectation work as expected', () => {
            const mockObj = (0, Mock_1.mockDeep)();
            mockObj.funcValueProp.deepProp.getNumber(2);
            (0, globals_1.expect)(mockObj.funcValueProp.deepProp.getNumber).toHaveBeenCalledTimes(1);
        });
        (0, globals_1.test)('can mock base function which have properties', () => {
            const mockObj = (0, Mock_1.mockDeep)();
            mockObj.funcValueProp.calledWith(1).mockReturnValue(2);
            (0, globals_1.expect)(mockObj.funcValueProp(1)).toBe(2);
        });
        (0, globals_1.test)('base function expectation work as expected', () => {
            const mockObj = (0, Mock_1.mockDeep)();
            mockObj.funcValueProp(1);
            (0, globals_1.expect)(mockObj.funcValueProp).toHaveBeenCalledTimes(1);
        });
    });
    (0, globals_1.describe)('mock implementation support', () => {
        (0, globals_1.test)('can provide mock implementation for props', () => {
            const mockObj = (0, Mock_1.default)({
                id: 61,
            });
            (0, globals_1.expect)(mockObj.id).toBe(61);
        });
        (0, globals_1.test)('can provide mock implementation for functions', () => {
            const mockObj = (0, Mock_1.default)({
                getNumber: () => {
                    return 150;
                },
            });
            (0, globals_1.expect)(mockObj.getNumber()).toBe(150);
        });
        (0, globals_1.test)('Partially mocked implementations can have non-mocked function expectations', () => {
            const mockObj = (0, Mock_1.default)({
                getNumber: () => {
                    return 150;
                },
            });
            mockObj.getSomethingWithArgs.calledWith(1, 2).mockReturnValue(3);
            (0, globals_1.expect)(mockObj.getSomethingWithArgs(1, 2)).toBe(3);
        });
        (0, globals_1.test)('can provide deep mock implementations', () => {
            const mockObj = (0, Mock_1.mockDeep)({
                deepProp: {
                    getNumber: (num) => {
                        return 76;
                    },
                },
            });
            (0, globals_1.expect)(mockObj.deepProp.getNumber(123)).toBe(76);
        });
        (0, globals_1.test)('Partially mocked implementations of deep mocks can have non-mocked function expectations', () => {
            const mockObj = (0, Mock_1.mockDeep)({
                deepProp: {
                    getNumber: (num) => {
                        return 76;
                    },
                },
            });
            mockObj.deepProp.getAnotherString.calledWith('abc').mockReturnValue('this string');
            (0, globals_1.expect)(mockObj.deepProp.getAnotherString('abc')).toBe('this string');
        });
    });
    (0, globals_1.describe)('Promise', () => {
        (0, globals_1.test)('Can return as Promise.resolve', async () => {
            const mockObj = (0, Mock_1.default)();
            mockObj.id = 17;
            const promiseMockObj = Promise.resolve(mockObj);
            await (0, globals_1.expect)(promiseMockObj).resolves.toBeDefined();
            await (0, globals_1.expect)(promiseMockObj).resolves.toMatchObject({ id: 17 });
        });
        (0, globals_1.test)('Can return as Promise.reject', async () => {
            const mockError = (0, Mock_1.default)();
            mockError.message = '17';
            const promiseMockObj = Promise.reject(mockError);
            try {
                await promiseMockObj;
                (0, assert_1.fail)('Promise must be rejected');
            }
            catch (e) {
                await (0, globals_1.expect)(e).toBeDefined();
                await (0, globals_1.expect)(e).toBe(mockError);
                await (0, globals_1.expect)(e).toHaveProperty('message', '17');
            }
            await (0, globals_1.expect)(promiseMockObj).rejects.toBeDefined();
            await (0, globals_1.expect)(promiseMockObj).rejects.toBe(mockError);
            await (0, globals_1.expect)(promiseMockObj).rejects.toHaveProperty('message', '17');
        });
        (0, globals_1.test)('Can mock a then function', async () => {
            const mockPromiseObj = Promise.resolve(42);
            const mockObj = (0, Mock_1.default)();
            mockObj.id = 17;
            // @ts-ignore
            mockObj.then = mockPromiseObj.then.bind(mockPromiseObj);
            const promiseMockObj = Promise.resolve(mockObj);
            await promiseMockObj;
            await (0, globals_1.expect)(promiseMockObj).resolves.toBeDefined();
            await (0, globals_1.expect)(promiseMockObj).resolves.toEqual(42);
        });
    });
    (0, globals_1.describe)('clearing / resetting', () => {
        (0, globals_1.test)('mockReset supports jest.fn()', () => {
            const fn = globals_1.jest.fn().mockImplementation(() => true);
            (0, globals_1.expect)(fn()).toBe(true);
            (0, Mock_1.mockReset)(fn);
            (0, globals_1.expect)(fn()).toBe(undefined);
        });
        (0, globals_1.test)('mockClear supports jest.fn()', () => {
            const fn = globals_1.jest.fn().mockImplementation(() => true);
            fn();
            (0, globals_1.expect)(fn.mock.calls.length).toBe(1);
            (0, Mock_1.mockClear)(fn);
            (0, globals_1.expect)(fn.mock.calls.length).toBe(0);
        });
        (0, globals_1.test)('mockReset object', () => {
            const mockObj = (0, Mock_1.default)();
            mockObj.getSomethingWithArgs.calledWith(1, (0, Matchers_1.anyNumber)()).mockReturnValue(3);
            (0, globals_1.expect)(mockObj.getSomethingWithArgs(1, 2)).toBe(3);
            (0, Mock_1.mockReset)(mockObj);
            (0, globals_1.expect)(mockObj.getSomethingWithArgs(1, 2)).toBe(undefined);
            mockObj.getSomethingWithArgs.calledWith(1, (0, Matchers_1.anyNumber)()).mockReturnValue(3);
            (0, globals_1.expect)(mockObj.getSomethingWithArgs(1, 2)).toBe(3);
        });
        (0, globals_1.test)('mockClear object', () => {
            const mockObj = (0, Mock_1.default)();
            mockObj.getSomethingWithArgs.calledWith(1, (0, Matchers_1.anyNumber)()).mockReturnValue(3);
            (0, globals_1.expect)(mockObj.getSomethingWithArgs(1, 2)).toBe(3);
            (0, globals_1.expect)(mockObj.getSomethingWithArgs.mock.calls.length).toBe(1);
            (0, Mock_1.mockClear)(mockObj);
            (0, globals_1.expect)(mockObj.getSomethingWithArgs.mock.calls.length).toBe(0);
            // Does not clear mock implementations of calledWith
            (0, globals_1.expect)(mockObj.getSomethingWithArgs(1, 2)).toBe(3);
        });
        (0, globals_1.test)('mockReset deep', () => {
            const mockObj = (0, Mock_1.mockDeep)();
            mockObj.deepProp.getNumber.calledWith(1).mockReturnValue(4);
            (0, globals_1.expect)(mockObj.deepProp.getNumber(1)).toBe(4);
            (0, Mock_1.mockReset)(mockObj);
            (0, globals_1.expect)(mockObj.deepProp.getNumber(1)).toBe(undefined);
        });
        (0, globals_1.test)('mockClear deep', () => {
            const mockObj = (0, Mock_1.mockDeep)();
            mockObj.deepProp.getNumber.calledWith(1).mockReturnValue(4);
            (0, globals_1.expect)(mockObj.deepProp.getNumber(1)).toBe(4);
            (0, globals_1.expect)(mockObj.deepProp.getNumber.mock.calls.length).toBe(1);
            (0, Mock_1.mockClear)(mockObj);
            (0, globals_1.expect)(mockObj.deepProp.getNumber.mock.calls.length).toBe(0);
            // Does not clear mock implementations of calledWith
            (0, globals_1.expect)(mockObj.deepProp.getNumber(1)).toBe(4);
        });
        (0, globals_1.test)('mockReset ignores undefined properties', () => {
            const mockObj = (0, Mock_1.default)();
            mockObj.someValue = undefined;
            mockObj.getSomethingWithArgs.calledWith(1, (0, Matchers_1.anyNumber)()).mockReturnValue(3);
            (0, Mock_1.mockReset)(mockObj);
            (0, globals_1.expect)(mockObj.getSomethingWithArgs(1, 2)).toBe(undefined);
        });
        (0, globals_1.test)('mockReset ignores null properties', () => {
            const mockObj = (0, Mock_1.default)();
            mockObj.someValue = null;
            mockObj.getSomethingWithArgs.calledWith(1, (0, Matchers_1.anyNumber)()).mockReturnValue(3);
            (0, Mock_1.mockReset)(mockObj);
            (0, globals_1.expect)(mockObj.getSomethingWithArgs(1, 2)).toBe(undefined);
        });
        (0, globals_1.test)('mockClear ignores undefined properties', () => {
            const mockObj = (0, Mock_1.default)();
            mockObj.someValue = undefined;
            mockObj.getSomethingWithArgs.calledWith(1, (0, Matchers_1.anyNumber)()).mockReturnValue(3);
            (0, globals_1.expect)(mockObj.getSomethingWithArgs(1, 2)).toBe(3);
            (0, globals_1.expect)(mockObj.getSomethingWithArgs.mock.calls.length).toBe(1);
            (0, Mock_1.mockClear)(mockObj);
            (0, globals_1.expect)(mockObj.getSomethingWithArgs.mock.calls.length).toBe(0);
        });
        (0, globals_1.test)('mockClear ignores null properties', () => {
            const mockObj = (0, Mock_1.default)();
            mockObj.someValue = null;
            mockObj.getSomethingWithArgs.calledWith(1, (0, Matchers_1.anyNumber)()).mockReturnValue(3);
            (0, globals_1.expect)(mockObj.getSomethingWithArgs(1, 2)).toBe(3);
            (0, globals_1.expect)(mockObj.getSomethingWithArgs.mock.calls.length).toBe(1);
            (0, Mock_1.mockClear)(mockObj);
            (0, globals_1.expect)(mockObj.getSomethingWithArgs.mock.calls.length).toBe(0);
        });
    });
    (0, globals_1.describe)('function mock', () => {
        (0, globals_1.test)('should mock function', async () => {
            const mockFunc = (0, Mock_1.mockFn)();
            mockFunc.mockResolvedValue(`str`);
            const result = await mockFunc(1, 2);
            (0, globals_1.expect)(result).toBe(`str`);
        });
        (0, globals_1.test)('should mock function and use calledWith', async () => {
            const mockFunc = (0, Mock_1.mockFn)();
            mockFunc.calledWith(1, 2).mockResolvedValue(`str`);
            const result = await mockFunc(1, 2);
            (0, globals_1.expect)(result).toBe(`str`);
        });
    });
    (0, globals_1.describe)('ignoreProps', () => {
        (0, globals_1.test)('can configure ignoreProps', async () => {
            Mock_1.JestMockExtended.configure({ ignoreProps: ['ignoreMe'] });
            const mockObj = (0, Mock_1.default)();
            (0, globals_1.expect)(mockObj.ignoreMe).toBeUndefined();
            (0, globals_1.expect)(mockObj.dontIgnoreMe).toBeDefined();
        });
    });
    (0, globals_1.describe)('JestMockExtended config', () => {
        (0, globals_1.test)('can mock then', async () => {
            Mock_1.JestMockExtended.configure({ ignoreProps: [] });
            const mockObj = (0, Mock_1.default)();
            mockObj.then();
            (0, globals_1.expect)(mockObj.then).toHaveBeenCalled();
        });
        (0, globals_1.test)('can reset config', async () => {
            Mock_1.JestMockExtended.configure({ ignoreProps: [] });
            Mock_1.JestMockExtended.resetConfig();
            const mockObj = (0, Mock_1.default)();
            (0, globals_1.expect)(mockObj.then).toBeUndefined();
        });
    });
    (0, globals_1.describe)('mock Date', () => {
        (0, globals_1.test)('should call built-in date functions', () => {
            const mockObj = (0, Mock_1.default)({ date: new Date('2000-01-15') });
            (0, globals_1.expect)(mockObj.date.getFullYear()).toBe(2000);
            (0, globals_1.expect)(mockObj.date.getMonth()).toBe(0);
            (0, globals_1.expect)(mockObj.date.getDate()).toBe(15);
        });
    });
});
