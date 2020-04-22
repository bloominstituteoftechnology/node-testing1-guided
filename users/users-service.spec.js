const { validate } = require("./users-service.js");

describe("user-service.js", function () {
  describe(".validate()", function () {
    it("should return false if the user is missing username or password", function () {
      expect(validate({})).toBe(false);
      expect(validate({ username: "sam" })).toBe(false);
      expect(validate({ password: "sam" })).toBe(false);
    });

    it("should return true when the user has a username and a password", function () {
      expect(validate({ username: "sam", password: "pass" })).toBe(true);
    });

    it.todo(
      " a user should have an `isAdmin` property that should be true or false."
    );
    it.todo(" the username should be at least 2 characters long.");
  });
});
