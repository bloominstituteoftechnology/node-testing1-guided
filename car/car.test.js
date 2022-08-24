function f() {
    return 42;
}

test('sanity checks', () => {
    let unknownValue = f();
    expect(unknownValue).toBe(42);
});