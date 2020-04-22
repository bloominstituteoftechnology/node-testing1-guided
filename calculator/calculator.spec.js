const { add } = require("./calculator.js");

// test away!
describe("calculator.js", () => {
  // test case
  it("should run tests without errors", () => {
    // arrange --> setup the world
    // act --> execute the code we're testing
    // assert --> check our assumptions
    expect(true).toBe(true); // assertion
  });

  describe(".add()", function () {
    it("should add two numbers", function () {
      expect(add(2, 2)).toBe(4);
      expect(add(0, 0)).toBe(0);
      expect(add(1, 2)).toBe(3);
      expect(add(2, 0)).toBe(2);
    });

    it("should return 0 when called with no arguments", function () {
      expect(add()).toBe(0);
    });

    it("should return the number when called with a single number", function () {
      expect(add(3)).toBe(3);
      expect(add(0)).toBe(0);
      expect(add(-5)).toBe(-5);
    });

    it("should sum a list of numbers separated by comma", function () {
      expect(add(1, 2, -5)).toBe(-2);
      expect(add(0, 2, 3)).toBe(5);
    });

    it("should support an array of numbers", function () {
      expect(add([1, 2, -5])).toBe(-2);
      expect(add([0, 2, 3])).toBe(5);
    });
  });
});

// try to make the tests fail, before making them pass
// jest runs files ending in .test.js or .spec.js
// jest run .js files contained inside any __tests__ folder at any level
// low hanging fruit first (happy path -> if the world is perfect, what does it do)
// you'll most likely have to make it up and make it happen.
