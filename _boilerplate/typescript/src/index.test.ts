import { hello } from ".";

describe("TDD", () => {
  it("should say hello", () => {
    expect(hello()).toEqual("not-hello");
  });
});
