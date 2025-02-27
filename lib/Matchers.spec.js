"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const Matchers_1 = require("./Matchers");
class Cls {
}
(0, globals_1.describe)('Matchers', () => {
    (0, globals_1.describe)('any', () => {
        (0, globals_1.test)('returns true for false', () => {
            (0, globals_1.expect)((0, Matchers_1.any)().asymmetricMatch(false)).toBe(true);
        });
        (0, globals_1.test)('returns true for undefined', () => {
            (0, globals_1.expect)((0, Matchers_1.any)().asymmetricMatch(undefined)).toBe(true);
        });
        (0, globals_1.test)('returns true for null', () => {
            (0, globals_1.expect)((0, Matchers_1.any)().asymmetricMatch(null)).toBe(true);
        });
        (0, globals_1.test)('Supports undefined in chain', () => {
            const f = globals_1.jest.fn();
            f(undefined);
            // @ts-ignore
            console.info(f.mock);
            (0, globals_1.expect)(f).toHaveBeenCalledWith((0, Matchers_1.any)());
        });
    });
    (0, globals_1.describe)('anyString', () => {
        (0, globals_1.test)('returns true for empty string', () => {
            (0, globals_1.expect)((0, Matchers_1.anyString)().asymmetricMatch('')).toBe(true);
        });
        (0, globals_1.test)('returns true for non-empty string', () => {
            (0, globals_1.expect)((0, Matchers_1.anyString)().asymmetricMatch('123')).toBe(true);
        });
        (0, globals_1.test)('returns false for number', () => {
            // @ts-ignore
            (0, globals_1.expect)((0, Matchers_1.anyString)().asymmetricMatch(123)).toBe(false);
        });
        (0, globals_1.test)('returns false for null', () => {
            // @ts-ignore
            (0, globals_1.expect)((0, Matchers_1.anyString)().asymmetricMatch(null)).toBe(false);
        });
        (0, globals_1.test)('returns false for undefined', () => {
            // @ts-ignore
            (0, globals_1.expect)((0, Matchers_1.anyString)().asymmetricMatch(undefined)).toBe(false);
        });
    });
    (0, globals_1.describe)('anyNumber', () => {
        (0, globals_1.test)('returns true for 0', () => {
            (0, globals_1.expect)((0, Matchers_1.anyNumber)().asymmetricMatch(0)).toBe(true);
        });
        (0, globals_1.test)('returns true for normal number', () => {
            (0, globals_1.expect)((0, Matchers_1.anyNumber)().asymmetricMatch(123)).toBe(true);
        });
        (0, globals_1.test)('returns false for string', () => {
            // @ts-ignore
            (0, globals_1.expect)((0, Matchers_1.anyNumber)().asymmetricMatch('123')).toBe(false);
        });
        (0, globals_1.test)('returns false for null', () => {
            // @ts-ignore
            (0, globals_1.expect)((0, Matchers_1.anyNumber)().asymmetricMatch(null)).toBe(false);
        });
        (0, globals_1.test)('returns false for undefined', () => {
            // @ts-ignore
            (0, globals_1.expect)((0, Matchers_1.anyNumber)().asymmetricMatch(undefined)).toBe(false);
        });
        (0, globals_1.test)('returns false for NaN', () => {
            (0, globals_1.expect)((0, Matchers_1.anyNumber)().asymmetricMatch(NaN)).toBe(false);
        });
    });
    (0, globals_1.describe)('anyBoolean', () => {
        (0, globals_1.test)('returns true for true', () => {
            (0, globals_1.expect)((0, Matchers_1.anyBoolean)().asymmetricMatch(true)).toBe(true);
        });
        (0, globals_1.test)('returns true for false', () => {
            (0, globals_1.expect)((0, Matchers_1.anyBoolean)().asymmetricMatch(false)).toBe(true);
        });
        (0, globals_1.test)('returns false for string', () => {
            // @ts-ignore
            (0, globals_1.expect)((0, Matchers_1.anyBoolean)().asymmetricMatch('true')).toBe(false);
        });
        (0, globals_1.test)('returns false for null', () => {
            // @ts-ignore
            (0, globals_1.expect)((0, Matchers_1.anyBoolean)().asymmetricMatch(null)).toBe(false);
        });
        (0, globals_1.test)('returns false for undefined', () => {
            // @ts-ignore
            (0, globals_1.expect)((0, Matchers_1.anyBoolean)().asymmetricMatch(undefined)).toBe(false);
        });
    });
    (0, globals_1.describe)('anyFunction', () => {
        (0, globals_1.test)('returns true for function', () => {
            (0, globals_1.expect)((0, Matchers_1.anyFunction)().asymmetricMatch(() => { })).toBe(true);
        });
        (0, globals_1.test)('returns false for string', () => {
            // @ts-ignore
            (0, globals_1.expect)((0, Matchers_1.anyFunction)().asymmetricMatch('true')).toBe(false);
        });
        (0, globals_1.test)('returns false for null', () => {
            // @ts-ignore
            (0, globals_1.expect)((0, Matchers_1.anyFunction)().asymmetricMatch(null)).toBe(false);
        });
        (0, globals_1.test)('returns false for undefined', () => {
            // @ts-ignore
            (0, globals_1.expect)((0, Matchers_1.anyFunction)().asymmetricMatch(undefined)).toBe(false);
        });
    });
    (0, globals_1.describe)('anySymbol', () => {
        (0, globals_1.test)('returns true for symbol', () => {
            (0, globals_1.expect)((0, Matchers_1.anySymbol)().asymmetricMatch(Symbol('123'))).toBe(true);
        });
        (0, globals_1.test)('returns false for string', () => {
            // @ts-ignore
            (0, globals_1.expect)((0, Matchers_1.anySymbol)().asymmetricMatch('123')).toBe(false);
        });
        (0, globals_1.test)('returns false for null', () => {
            // @ts-ignore
            (0, globals_1.expect)((0, Matchers_1.anySymbol)().asymmetricMatch(null)).toBe(false);
        });
        (0, globals_1.test)('returns false for undefined', () => {
            // @ts-ignore
            (0, globals_1.expect)((0, Matchers_1.anySymbol)().asymmetricMatch(undefined)).toBe(false);
        });
    });
    (0, globals_1.describe)('anyObject', () => {
        (0, globals_1.test)('returns true for object', () => {
            (0, globals_1.expect)((0, Matchers_1.anyObject)().asymmetricMatch({})).toBe(true);
        });
        (0, globals_1.test)('returns true for new object', () => {
            (0, globals_1.expect)((0, Matchers_1.anyObject)().asymmetricMatch(new Object())).toBe(true);
        });
        (0, globals_1.test)('returns true for new instance', () => {
            (0, globals_1.expect)((0, Matchers_1.anyObject)().asymmetricMatch(new Cls())).toBe(true);
        });
        (0, globals_1.test)('returns true for new builtin', () => {
            (0, globals_1.expect)((0, Matchers_1.anyObject)().asymmetricMatch(new Map())).toBe(true);
        });
        (0, globals_1.test)('returns false for string', () => {
            (0, globals_1.expect)((0, Matchers_1.anyObject)().asymmetricMatch('123')).toBe(false);
        });
        (0, globals_1.test)('returns false for number', () => {
            (0, globals_1.expect)((0, Matchers_1.anyObject)().asymmetricMatch(123)).toBe(false);
        });
        (0, globals_1.test)('returns false for null', () => {
            (0, globals_1.expect)((0, Matchers_1.anyObject)().asymmetricMatch(null)).toBe(false);
        });
        (0, globals_1.test)('returns false for undefined', () => {
            (0, globals_1.expect)((0, Matchers_1.anyObject)().asymmetricMatch(undefined)).toBe(false);
        });
    });
    (0, globals_1.describe)('anyArray', () => {
        (0, globals_1.test)('returns true for empty array', () => {
            (0, globals_1.expect)((0, Matchers_1.anyArray)().asymmetricMatch([])).toBe(true);
        });
        (0, globals_1.test)('returns true for non empty', () => {
            (0, globals_1.expect)((0, Matchers_1.anyArray)().asymmetricMatch([1, 2, 3])).toBe(true);
        });
        (0, globals_1.test)('returns false for object', () => {
            // @ts-ignore
            (0, globals_1.expect)((0, Matchers_1.anyArray)().asymmetricMatch({})).toBe(false);
        });
        (0, globals_1.test)('returns false for null', () => {
            // @ts-ignored
            (0, globals_1.expect)((0, Matchers_1.anyArray)().asymmetricMatch(null)).toBe(false);
        });
        (0, globals_1.test)('returns false for undefined', () => {
            // @ts-ignore
            (0, globals_1.expect)((0, Matchers_1.anyArray)().asymmetricMatch(undefined)).toBe(false);
        });
    });
    (0, globals_1.describe)('anyMap', () => {
        (0, globals_1.test)('returns true for empty Map', () => {
            (0, globals_1.expect)((0, Matchers_1.anyMap)().asymmetricMatch(new Map())).toBe(true);
        });
        (0, globals_1.test)('returns true for non empty', () => {
            const map = new Map();
            map.set(1, 2);
            (0, globals_1.expect)((0, Matchers_1.anyMap)().asymmetricMatch(map)).toBe(true);
        });
        (0, globals_1.test)('returns false for object', () => {
            // @ts-ignore
            (0, globals_1.expect)((0, Matchers_1.anyMap)().asymmetricMatch({})).toBe(false);
        });
        (0, globals_1.test)('returns false for null', () => {
            // @ts-ignore
            (0, globals_1.expect)((0, Matchers_1.anyMap)().asymmetricMatch(null)).toBe(false);
        });
        (0, globals_1.test)('returns false for undefined', () => {
            // @ts-ignore
            (0, globals_1.expect)((0, Matchers_1.anyMap)().asymmetricMatch(undefined)).toBe(false);
        });
    });
    (0, globals_1.describe)('anySet', () => {
        (0, globals_1.test)('returns true for empty Set', () => {
            (0, globals_1.expect)((0, Matchers_1.anySet)().asymmetricMatch(new Set())).toBe(true);
        });
        (0, globals_1.test)('returns true for non empty', () => {
            const set = new Set();
            set.add(2);
            (0, globals_1.expect)((0, Matchers_1.anySet)().asymmetricMatch(set)).toBe(true);
        });
        (0, globals_1.test)('returns false for object', () => {
            // @ts-ignore
            (0, globals_1.expect)((0, Matchers_1.anySet)().asymmetricMatch({})).toBe(false);
        });
        (0, globals_1.test)('returns false for null', () => {
            // @ts-ignore
            (0, globals_1.expect)((0, Matchers_1.anySet)().asymmetricMatch(null)).toBe(false);
        });
        (0, globals_1.test)('returns false for undefined', () => {
            // @ts-ignore
            (0, globals_1.expect)((0, Matchers_1.anySet)().asymmetricMatch(undefined)).toBe(false);
        });
    });
    (0, globals_1.describe)('isA', () => {
        (0, globals_1.test)('returns true when class is the same builtin', () => {
            (0, globals_1.expect)((0, Matchers_1.isA)(Map).asymmetricMatch(new Map())).toBe(true);
        });
        (0, globals_1.test)('returns true for non empty', () => {
            (0, globals_1.expect)((0, Matchers_1.isA)(Cls).asymmetricMatch(new Cls())).toBe(true);
        });
        (0, globals_1.test)('returns false for object', () => {
            (0, globals_1.expect)((0, Matchers_1.isA)(Cls).asymmetricMatch({})).toBe(false);
        });
        (0, globals_1.test)('returns false for null', () => {
            (0, globals_1.expect)((0, Matchers_1.isA)(Cls).asymmetricMatch(null)).toBe(false);
        });
        (0, globals_1.test)('returns false for undefined', () => {
            (0, globals_1.expect)((0, Matchers_1.isA)(Cls).asymmetricMatch(undefined)).toBe(false);
        });
    });
    (0, globals_1.describe)('arrayIncludes', () => {
        (0, globals_1.test)('returns true when array contains value', () => {
            (0, globals_1.expect)((0, Matchers_1.arrayIncludes)('val').asymmetricMatch(['val', 'val2'])).toBe(true);
        });
        (0, globals_1.test)('returns false when array does not contain value', () => {
            (0, globals_1.expect)((0, Matchers_1.arrayIncludes)('val3').asymmetricMatch(['val', 'val2'])).toBe(false);
        });
        (0, globals_1.test)('returns false when not a map', () => {
            // @ts-ignore
            (0, globals_1.expect)((0, Matchers_1.arrayIncludes)('val3').asymmetricMatch({})).toBe(false);
        });
        (0, globals_1.test)('returns false when for null', () => {
            // @ts-ignore
            (0, globals_1.expect)((0, Matchers_1.arrayIncludes)('val3').asymmetricMatch(null)).toBe(false);
        });
        (0, globals_1.test)('returns false when for undefined', () => {
            // @ts-ignore
            (0, globals_1.expect)((0, Matchers_1.arrayIncludes)('val3').asymmetricMatch(undefined)).toBe(false);
        });
    });
    (0, globals_1.describe)('mapHas', () => {
        (0, globals_1.test)('returns true when map contains key', () => {
            (0, globals_1.expect)((0, Matchers_1.mapHas)('key').asymmetricMatch(new Map([['key', 'val']]))).toBe(true);
        });
        (0, globals_1.test)('returns false when map does not contain key', () => {
            (0, globals_1.expect)((0, Matchers_1.mapHas)('key3').asymmetricMatch(new Map([['key', 'val']]))).toBe(false);
        });
        (0, globals_1.test)('returns false when not a map', () => {
            // @ts-ignore
            (0, globals_1.expect)((0, Matchers_1.mapHas)('val3').asymmetricMatch({})).toBe(false);
        });
        (0, globals_1.test)('returns false when for null', () => {
            // @ts-ignore
            (0, globals_1.expect)((0, Matchers_1.mapHas)('val3').asymmetricMatch(null)).toBe(false);
        });
        (0, globals_1.test)('returns false when for undefined', () => {
            // @ts-ignore
            (0, globals_1.expect)((0, Matchers_1.mapHas)('val3').asymmetricMatch(undefined)).toBe(false);
        });
    });
    (0, globals_1.describe)('setHas', () => {
        (0, globals_1.test)('returns true when set contains value', () => {
            (0, globals_1.expect)((0, Matchers_1.setHas)('val').asymmetricMatch(new Set(['val']))).toBe(true);
        });
        (0, globals_1.test)('returns false when set does not contain value', () => {
            (0, globals_1.expect)((0, Matchers_1.setHas)('val3').asymmetricMatch(new Set(['val', 'val2']))).toBe(false);
        });
        (0, globals_1.test)('returns false when not a set', () => {
            // @ts-ignore
            (0, globals_1.expect)((0, Matchers_1.setHas)('val3').asymmetricMatch({})).toBe(false);
        });
        (0, globals_1.test)('returns false when for null', () => {
            // @ts-ignore
            (0, globals_1.expect)((0, Matchers_1.setHas)('val3').asymmetricMatch(null)).toBe(false);
        });
        (0, globals_1.test)('returns false when for undefined', () => {
            // @ts-ignore
            (0, globals_1.expect)((0, Matchers_1.setHas)('val3').asymmetricMatch(undefined)).toBe(false);
        });
    });
    (0, globals_1.describe)('objectContainsKey', () => {
        (0, globals_1.test)('returns true when object contains key', () => {
            (0, globals_1.expect)((0, Matchers_1.objectContainsKey)('key').asymmetricMatch({ key: 'val' })).toBe(true);
        });
        (0, globals_1.test)('returns false when object does not contain key', () => {
            (0, globals_1.expect)((0, Matchers_1.objectContainsKey)('key3').asymmetricMatch({ key: 'val' })).toBe(false);
        });
        (0, globals_1.test)('returns false when not a object', () => {
            (0, globals_1.expect)((0, Matchers_1.objectContainsKey)('val3').asymmetricMatch(213)).toBe(false);
        });
        (0, globals_1.test)('returns false when for null', () => {
            (0, globals_1.expect)((0, Matchers_1.objectContainsKey)('val3').asymmetricMatch(null)).toBe(false);
        });
        (0, globals_1.test)('returns false when for undefined', () => {
            (0, globals_1.expect)((0, Matchers_1.objectContainsKey)('val3').asymmetricMatch(undefined)).toBe(false);
        });
    });
    (0, globals_1.describe)('objectContainsValue', () => {
        (0, globals_1.test)('returns true when object contains value', () => {
            (0, globals_1.expect)((0, Matchers_1.objectContainsValue)('val').asymmetricMatch({ key: 'val' })).toBe(true);
        });
        (0, globals_1.test)('returns false when object does not contain value', () => {
            (0, globals_1.expect)((0, Matchers_1.objectContainsValue)('val3').asymmetricMatch({ key: 'val' })).toBe(false);
        });
        (0, globals_1.test)('returns false when not a object', () => {
            (0, globals_1.expect)((0, Matchers_1.objectContainsValue)('val3').asymmetricMatch(213)).toBe(false);
        });
        (0, globals_1.test)('returns false when for null', () => {
            (0, globals_1.expect)((0, Matchers_1.objectContainsValue)('val3').asymmetricMatch(null)).toBe(false);
        });
        (0, globals_1.test)('returns false when for undefined', () => {
            (0, globals_1.expect)((0, Matchers_1.objectContainsValue)('val3').asymmetricMatch(undefined)).toBe(false);
        });
    });
    (0, globals_1.describe)('notNull', () => {
        (0, globals_1.test)('returns true when object', () => {
            (0, globals_1.expect)((0, Matchers_1.notNull)().asymmetricMatch({ key: 'val' })).toBe(true);
        });
        (0, globals_1.test)('returns true when undefined', () => {
            (0, globals_1.expect)((0, Matchers_1.notNull)().asymmetricMatch(undefined)).toBe(true);
        });
        (0, globals_1.test)('returns true when empty string', () => {
            (0, globals_1.expect)((0, Matchers_1.notNull)().asymmetricMatch('')).toBe(true);
        });
        (0, globals_1.test)('returns false when for null', () => {
            (0, globals_1.expect)((0, Matchers_1.notNull)().asymmetricMatch(null)).toBe(false);
        });
    });
    (0, globals_1.describe)('notUndefined', () => {
        (0, globals_1.test)('returns true when object', () => {
            (0, globals_1.expect)((0, Matchers_1.notUndefined)().asymmetricMatch({ key: 'val' })).toBe(true);
        });
        (0, globals_1.test)('returns true when null', () => {
            (0, globals_1.expect)((0, Matchers_1.notUndefined)().asymmetricMatch(null)).toBe(true);
        });
        (0, globals_1.test)('returns true when empty string', () => {
            (0, globals_1.expect)((0, Matchers_1.notUndefined)().asymmetricMatch('')).toBe(true);
        });
        (0, globals_1.test)('returns false when for undefined', () => {
            (0, globals_1.expect)((0, Matchers_1.notUndefined)().asymmetricMatch(undefined)).toBe(false);
        });
    });
    (0, globals_1.describe)('notEmpty', () => {
        (0, globals_1.test)('returns true when object', () => {
            (0, globals_1.expect)((0, Matchers_1.notEmpty)().asymmetricMatch({ key: 'val' })).toBe(true);
        });
        (0, globals_1.test)('returns true when null', () => {
            (0, globals_1.expect)((0, Matchers_1.notEmpty)().asymmetricMatch(null)).toBe(false);
        });
        (0, globals_1.test)('returns true when empty string', () => {
            (0, globals_1.expect)((0, Matchers_1.notEmpty)().asymmetricMatch('')).toBe(false);
        });
        (0, globals_1.test)('returns false when for undefined', () => {
            (0, globals_1.expect)((0, Matchers_1.notEmpty)().asymmetricMatch(undefined)).toBe(false);
        });
    });
    (0, globals_1.describe)('captor', () => {
        let fn;
        let doSomething;
        (0, globals_1.beforeEach)(() => {
            fn = globals_1.jest.fn();
            doSomething = (fn, count) => {
                fn(String(count), count, { 1: 2 });
            };
        });
        (0, globals_1.test)('can capture arg with other matchers', () => {
            doSomething(fn, 1);
            const argCaptor = (0, Matchers_1.captor)();
            (0, globals_1.expect)(fn).toHaveBeenCalledWith(argCaptor, (0, Matchers_1.any)(), (0, Matchers_1.any)());
            (0, globals_1.expect)(argCaptor.value).toBe('1');
        });
        (0, globals_1.test)('stores all values', () => {
            doSomething(fn, 1);
            doSomething(fn, 2);
            doSomething(fn, 3);
            const argCaptor = (0, Matchers_1.captor)();
            (0, globals_1.expect)(fn).toHaveBeenNthCalledWith(1, argCaptor, (0, Matchers_1.any)(), (0, Matchers_1.any)());
            (0, globals_1.expect)(fn).toHaveBeenNthCalledWith(2, argCaptor, (0, Matchers_1.any)(), (0, Matchers_1.any)());
            (0, globals_1.expect)(fn).toHaveBeenNthCalledWith(3, argCaptor, (0, Matchers_1.any)(), (0, Matchers_1.any)());
            (0, globals_1.expect)(argCaptor.value).toBe('3');
            (0, globals_1.expect)(argCaptor.values).toEqual(['1', '2', '3']);
        });
    });
    (0, globals_1.describe)('matches function', () => {
        (0, globals_1.test)('expects passes for when it returns true', () => {
            const fn = globals_1.jest.fn();
            fn(1);
            (0, globals_1.expect)(fn).toHaveBeenCalledWith((0, Matchers_1.matches)((val) => val === 1));
        });
        (0, globals_1.test)('expects with not passes for when it returns false', () => {
            const fn = globals_1.jest.fn();
            fn(1);
            (0, globals_1.expect)(fn).not.toHaveBeenCalledWith((0, Matchers_1.matches)((val) => val === 2));
        });
    });
});
