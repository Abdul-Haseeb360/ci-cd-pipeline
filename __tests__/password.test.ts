import { checkPasswordStrength } from "../app/utils/password";

describe("Password Strength Checker", () => {
  test("returns weak for short password", () => {
    expect(checkPasswordStrength("123")).toBe("weak");
  });

  test("returns medium for normal password", () => {
    expect(checkPasswordStrength("abcdef")).toBe("medium");
  });

  test("returns strong for complex password", () => {
    expect(checkPasswordStrength("abc123!@#xyz")).toBe("strong");
  });
});