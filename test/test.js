require("react-native-mock/mock");

var React = require("react-native");
var ReactNativeSvg = require("../index");

var expect = require("chai").expect;
var render = require("enzyme").render;

describe("mock", function () {
  it("requires", function () {
    expect(Object.keys(ReactNativeSvg)).to.have.length.above(1);
  });

  it("renders", function () {
    for (var prop in ReactNativeSvg) {
      var comp = ReactNativeSvg[prop];
      render(React.createElement(comp));
    }
  });
});
