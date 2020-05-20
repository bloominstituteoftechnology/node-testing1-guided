const { add } = require("./calculator.js");
describe("calculator", () => {
  describe("add()", () => {
    // it("should add two numbers", () => {
    //   // setup - Arrange
    //   const expected = 7;
    //   const firstNumber = 4;
    //   const secondNumber = 3;
    //   // execution of the code - Act
    //   const actual = add(firstNumber, secondNumber);
    //   // check assummptions - Assert
    //   expect(actual).toBe(expected);
    // });
    it("should add two numbers", () => {
      expect(add(2, 2)).toBe(4);
      expect(add(0, 0)).toBe(0);
      expect(add(-1, 0)).toBe(-1);
      expect(add(-1, 0)).toBe(-1);
      expect(add(-1, 1)).toBe(0);
    });
    it("should return the value when only one value is given", function () {
      expect(add(2)).toBe(2);
      expect(add(undefined, 3)).toBe(3);
    });
    it.todo("should return zero");
    it.todo("strings");
    it.todo("objects");
    it.todo("null");
    it.todo("NaN");
    it.todo("array");
  });
});
