function f() {
    return 42;
}

test('sanity checks', () => {
    let unknownValue = f();
    expect(unknownValue).toBe(42);    // unknownValue === 42
    
    expect('asdf').toBe('asdf');      // 'asdf' === 'asdf'
    expect(null).toBe(null);

    expect({ a: 1 }).toEqual({ a: 1 });
});