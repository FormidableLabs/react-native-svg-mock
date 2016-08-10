"use strict";

var React = require("react-native");

// Create a vanilla SVG component
var createComponent = function (name) {
  return React.createClass({
    displayName: name,

    propTypes: {
      children: React.PropTypes.node
    },

    render: function () {
      var type = name[0].toLowerCase() + name.substr(1);
      return React.createElement(type, this.props, this.props.children);
    }
  });
};

// Mock all react-native-svg exports
var Svg = createComponent("Svg");
var Circle = createComponent("Circle");
var Ellipse = createComponent("Ellipse");
var G = createComponent("G");
var Text = createComponent("Text");
var Path = createComponent("Path");
var Polygon = createComponent("Polygon");
var Polyline = createComponent("Polyline");
var Line = createComponent("Line");
var Rect = createComponent("Rect");
var Use = createComponent("Use");
var Image = createComponent("Image");
var Symbol = createComponent("Symbol");
var Defs = createComponent("Defs");
var LinearGradient = createComponent("LinearGradient");
var RadialGradient = createComponent("RadialGradient");
var Stop = createComponent("Stop");
var ClipPath = createComponent("ClipPath");

module.exports = {
  Svg: Svg,
  Circle: Circle,
  Ellipse: Ellipse,
  G: G,
  Text: Text,
  Path: Path,
  Polygon: Polygon,
  Polyline: Polyline,
  Line: Line,
  Rect: Rect,
  Use: Use,
  Image: Image,
  Symbol: Symbol,
  Defs: Defs,
  LinearGradient: LinearGradient,
  RadialGradient: RadialGradient,
  Stop: Stop,
  ClipPat: ClipPath,
  default: Svg
};
