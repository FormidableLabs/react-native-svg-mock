
var React = require("react");
var ReactNativeSvg = require("../");

var expect = require("chai").expect;
const enzyme = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");

enzyme.configure({ adapter: new Adapter() });

describe("mock", function () {
  it("requires", function () {
    expect(Object.keys(ReactNativeSvg)).to.have.length.above(1);
  });

  it("renders", function () {
    for (var prop in ReactNativeSvg) {
      var comp = ReactNativeSvg[prop];
      enzyme.render(React.createElement(comp));
    }
  });
});
