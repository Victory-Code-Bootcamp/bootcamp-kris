const { isArray } = require("./isArray");

test("determines whether [] input is array", () => {
  expect(isArray([])).toBe(true);
});

test("determines whether 'hello world' is a string", () => {
  expect(isArray("Hello World")).toBe(false);
});
