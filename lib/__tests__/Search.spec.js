"use strict";

var _enzyme = require("enzyme");

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _Search = _interopRequireDefault(require("../Search"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* setup enzyme */
(0, _enzyme.configure)({
  adapter: new _enzymeAdapterReact.default()
});
/* setup jsdom */

var jsdom = require('jsdom');

var JSDOM = jsdom.JSDOM;
var window = new JSDOM('').window;
global.window = window;
global.document = window.document;
test('Search renders correctly and matches snapshot', function () {
  var handleClear = jest.fn();
  var handleSearchClick = jest.fn();
  var handleChange = jest.fn();

  var component = _reactTestRenderer.default.create(_react.default.createElement(_Search.default, {
    inputName: "my-input",
    placeholder: "Search for something...",
    onClearClick: handleClear,
    onSearchClick: handleSearchClick,
    onKeyChange: handleChange
  }));

  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Search renders the correct elements and props', function () {
  var handleClear = jest.fn();
  var handleSearchClick = jest.fn();
  var handleChange = jest.fn();
  var wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Search.default, {
    inputName: "my-input",
    placeholder: "Search for something...",
    onClearClick: handleClear,
    onSearchClick: handleSearchClick,
    onKeyChange: handleChange
  }));
  expect(wrapper.instance().props.placeholder).toEqual('Search for something...');
  expect(wrapper.instance().props.inputName).toEqual('my-input');
  expect(wrapper.find('svg').length).toEqual(2); // wrapper
  //   .find('.input')
  //   .props()
  //   .onClick()

  console.log(wrapper.debug());
});