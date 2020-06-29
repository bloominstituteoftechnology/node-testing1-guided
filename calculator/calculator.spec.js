const { add } = require('./calculator.js'); //import waht you want to test

//Write tests first

//AAA
//Arrange, Act, Assert

describe('calculator functions', () => { //describes test
    describe('test add()', () => {
        it('returns sum of 2 numbers', () => {
            expect(add(2,3)).toBe(5);
            expect(add(2,2)).toBe(4);
        });

        it('returns 0 with no arguements', () => {
            expect(add()).toBe(0);
        });

        it('returns value passed when only one arg provided', () => {
            a = null;
            b = 3;
            expected = 3;
            result = add(b);
            expect(result).toBe(expected);
        });

        it('returns the sum of any number of args', () => {
            expect(add(1, 2, 3)).toBe(6);
            expect(add(1, 2, 3, 5)).toBe(11);
        });

        it.todo('returns the sum of multiple numbers'); //placeholder
    })
})

/*
describe('calculator functions', () => { //describes test
    describe('test add()', () => {
        let a = 2; Arrange
        let b = 2;
        let expected = 4;
        let result = -1;
        it('returns sum of 2 numbers', () => {
            result = add(a,b) ACT
            expect(result).toBe(expected); Express
        a = 2;
        b = 3;
        expected = 5;
            result = add(a,b)
            expect(result).toBe(expected);



        })
    })
    it.todo('returns the sum of multiple numbers'); //placeholder
})
*/
