"use strict";

var ReactNativeSvgMock = require("./src");

// the cache key that real react-native-svg would get
var key = require.resolve("react-native-svg");

// make sure the cache is filled with our lib
require.cache[key] = {
  id: key,
  filename: key,
  loaded: true,
  exports: ReactNativeSvgMock
};
