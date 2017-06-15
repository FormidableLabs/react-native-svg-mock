import React from "react-native";

// Create a vanilla SVG component
const createComponent = function (name) {
  return class extends React.Component {
    static displayName =name

    static propTypes = {
      children: React.PropTypes.node
    }

    render() {
      const type = name[0].toLowerCase() + name.substr(1);
      return React.createElement(type, this.props, this.props.children);
    }
  };
};

// Mock all react-native-svg exports
// from https://github.com/magicismight/react-native-svg/blob/master/index.js
const Svg = createComponent("Svg");
const Circle = createComponent("Circle");
const Ellipse = createComponent("Ellipse");
const G = createComponent("G");
const Text = createComponent("Text");
const TSpan = createComponent("TSpan");
const Path = createComponent("Path");
const Polygon = createComponent("Polygon");
const Polyline = createComponent("Polyline");
const Line = createComponent("Line");
const Rect = createComponent("Rect");
const Use = createComponent("Use");
const Image = createComponent("Image");
const Symbol = createComponent("Symbol");
const Defs = createComponent("Defs");
const LinearGradient = createComponent("LinearGradient");
const RadialGradient = createComponent("RadialGradient");
const Stop = createComponent("Stop");
const ClipPath = createComponent("ClipPath");

export {
  Svg,
  Circle,
  Ellipse,
  G,
  Text,
  TSpan,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath
};

export default Svg;
