const fn = require("./index");
const expect = require("chai").expect;

describe("test about 1-two-sum result:", function () {
  it("fn exec", function () {
    expect(fn([1, 3, 5, 6], 6)).to.be.eql([0, 2]);
    expect(fn([6, 4, 6, 3], 7)).to.be.eql([1, 3]);
  });
});
