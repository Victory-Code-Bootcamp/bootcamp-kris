const multiply = require("./multiply");

test("multiply 3 * 3 to equal 9", () => {
  expect(multiply(3, 3)).toBe(9);
});

test("multiply any number by zero should equal zero", () => {
  expect(multiply(7, 0)).toBe(0);
});

test("multiply a negative number by a positive number should equal a negative number", () => {
  expect(multiply(12, -2)).toBe(-24);
});

test("multiply two negative numbers should equal a positive number", () => {
  expect(multiply(-12, -2)).toBe(24);
});

test("two large numbers multiplied by each other", () => {
  expect(
    multiply(
      22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222,
      2
    )
  ).toBe(
    44444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
  );
});
