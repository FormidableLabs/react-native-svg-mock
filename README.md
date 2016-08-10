# react-native-svg-mock

A mock implementation of react-native-svg for use in tests.

## Install

With npm, do:

```sh
npm install react-native-svg-mock --save-dev
```

## Usage
```js
/* file-that-runs-before-all-of-my-tests.js */

// This will mutate `react-native-svg`'s require cache with `react-native-svg-mock`'s.
require('react-native-svg-mock/mock'); // <-- side-effects!!!
```

Or, with something like [Mockery](https://github.com/mfncooper/mockery), do:

```js
import mockery from "mockery";
import reactNativeSvgMock from "react-native-svg-mock";

mockery.registerMock("react-native-svg", reactNativeSvgMock);
```

In a test with [Enzyme](https://github.com/airbnb/enzyme) and [Mocha](https://github.com/mochajs/mocha), this could look like:

```jsx
import "react-native-mock/mock";
import "react-native-svg-mock/mock";
import { render } from "enzyme";
import { expect } from "chai";

import { VictoryChart } from "victory-native";

describe("<VictoryChart />", function () {
  it("should render", function () {
    var component = render(<VictoryChart />);
    expect(component).to.have.length(1);
  });
});
```
