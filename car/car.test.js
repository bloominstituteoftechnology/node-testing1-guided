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


const { Car } = require('./car');

describe('Car class', () => {
    test('Car is defined', () => {
        expect(Car).toBeDefined();
        expect(Car).not.toBe(undefined);

        let car = new Car();
        expect(car).toBeInstanceOf(Car) // car instanceof Car
    });

    test('cars have a make and model', () => {
        let car = new Car('Honda', 'Fit');
        // expect(car.make).toBe('Honda');
        // expect(car).toHaveProperty('make');
        // expect(car).toHaveProperty('model', 'Fit');
        // expect(car).not.toHaveProperty('jabberwocky');

        expect(car).toMatchObject({ make: 'Honda', model: 'Fit' });
    });

    test('car can drive', () => {
        let car = new Car('Honda', 'Fit');
        expect(car).toHaveProperty('odometer', 0);
    });
})