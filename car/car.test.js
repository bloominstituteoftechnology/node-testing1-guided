function f() {
    return 42;
}

test('sanity checks', () => {
    let unknownValue = f();
    expect(unknownValue).toBe(42);    // unknownValue === 42
    
    expect('asdf').toBe('asdf');      // 'asdf' === 'asdf'
    expect(null).toBe(null);

    expect({ a: 1 }).toEqual({ a: 1 });
    expect(42).toEqual(42);

    let object = { foo: 'bar' };
    expect(object).toBe(object) // object === object
});