const { add, sub, multiply, divide, squared } = require("./calculator.js");

const test1 = {
  num1: 3,
  num2: 2,
};

const test2 = {
  num1: 6,
  num2: 3,
};

describe("add() method", () => {
  const actual = add(test1.num1, test1.num2);
  const actual2 = add(test2.num1, test2.num2);
  it("should add two nums", () => {
    expect(actual).toEqual(5);
    expect(actual2).toEqual(9);
  });
});
describe("sub() method", () => {
  const actual = sub(test1.num1, test1.num2);
  it("should add two nums", () => {
    expect(actual).toEqual(1);
  });
});
describe("multiply() method", () => {
  const actual = multiply(test1.num1, test1.num2);
  it("should multiply two nums", () => {
    expect(actual).toEqual(6);
  });
});
describe("divide() method", () => {
  const actual = divide(test2.num1, test2.num2);
  it("should divide two nums", () => {
    expect(actual).toEqual(2);
  });
});
describe("squared() method", () => {
  const actual = squared(test2.num1, test2.num1);
  it("should square two nums", () => {
    expect(actual).toEqual(36);
  });
});
