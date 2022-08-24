function f() {
    return 42;
}

function q(object) {
    object.qwerty = 17;
    return object;
}

test('sanity checks', () => {
    let unknownValue = f();
    expect(unknownValue).toBe(42);    // unknownValue === 42
    
    expect('asdf').toBe('asdf');      // 'asdf' === 'asdf'
    expect(null).toBe(null);

    expect({ a: 1 }).toEqual({ a: 1 });
    expect(42).toEqual(42);

    let object = { foo: 'bar' };
    expect(q(object)).toBe(object) // object === object

    expect({ a: 1 }).not.toBe({ a: 1 });
});