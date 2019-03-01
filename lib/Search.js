"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  border-color: ", ";\n  position: absolute;\n  right: 15px;\n  bottom: -4px;\n  width: 3rem;\n  display: block;\n\n  svg {\n    color: black;\n    height: 38px;\n    opacity: 0.5;\n  }\n  &:hover {\n    opacity: 0.5;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  border-color: ", ";\n  position: absolute;\n  right: 0;\n  bottom: 2px;\n  width: 3rem;\n  display: block;\n  svg {\n    color: black;\n    height: 24px;\n    opacity: 0.5;\n  }\n  &:hover {\n    opacity: 0.5;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  color: black;\n  border: none;\n  margin: 0;\n  outline: 0;\n  padding: 10px 20px;\n  width: 100%;\n  &::placeholder {\n    color: rgba(0, 0, 0, 0.65);\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border-color: ", ";\n  position: relative;\n  width: 100%;\n  border: 1px solid #ddd;\n  border-radius: 1px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var SearchBar =
/*#__PURE__*/
function (_Component) {
  _inherits(SearchBar, _Component);

  _createClass(SearchBar, null, [{
    key: "defaultProps",
    get: function get() {
      return {
        placeholder: 'Search',
        autoFocus: false
      };
    }
  }, {
    key: "propTypes",
    get: function get() {
      return {
        inputName: _propTypes.default.string,
        placeholder: _propTypes.default.string,
        autoFocus: _propTypes.default.bool,
        onKeyChange: _propTypes.default.func,
        onSearchClick: _propTypes.default.func,
        onClearClick: _propTypes.default.func
      };
    }
  }]);

  function SearchBar(props) {
    var _this;

    _classCallCheck(this, SearchBar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SearchBar).call(this, props));
    _this.state = {
      searchValue: '',
      focused: true
    };
    return _this;
  }

  _createClass(SearchBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.autoFocus) {
        this.focusInput();
      }
    }
  }, {
    key: "focusInput",
    value: function focusInput() {
      var _this2 = this;

      _reactDom.default.findDOMNode(this.refs.searchInput).placeholder = '';
      _reactDom.default.findDOMNode(this.refs.searchInput).value = '';
      setTimeout(function () {
        _reactDom.default.findDOMNode(_this2.refs.searchInput).focus();
      }, 100);
    }
  }, {
    key: "handleInputBlur",
    value: function handleInputBlur(e) {
      var placeholder = this.props.placeholder; //ReactDOM.findDOMNode(this.refs.searchInput).value = ''

      _reactDom.default.findDOMNode(this.refs.searchInput).placeholder = placeholder;
      this.setState({
        focused: false
      });
    }
  }, {
    key: "handleInputFocus",
    value: function handleInputFocus(e) {
      this.focusInput();
      this.setState({
        focused: false
      });
    }
  }, {
    key: "handleInputClick",
    value: function handleInputClick(e) {
      this.focusInput();
      this.setState({
        focused: false
      });
    }
  }, {
    key: "handleKeyChange",
    value: function handleKeyChange(e) {
      var _this3 = this;

      var searchValue = this.state.searchValue;
      this.setState({
        searchValue: this.refs.searchInput.value
      }, function () {
        if (_this3.props.onKeyChange !== undefined) {
          _this3.props.onKeyChange(searchValue);
        }
      });
    }
  }, {
    key: "handleSearchClick",
    value: function handleSearchClick() {
      var searchValue = this.state.searchValue;

      if (this.props.onSearchClick !== undefined) {
        this.props.onSearchClick(searchValue);
      }
    }
  }, {
    key: "handleClearClick",
    value: function handleClearClick() {
      var _this4 = this;

      var searchValue = this.state.searchValue;
      this.refs.searchInput.value = '';
      this.setState({
        searchValue: ''
      }, function () {
        if (_this4.props.onClearClick !== undefined) {
          _this4.props.onClearClick(searchValue);
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var _this$props = this.props,
          inputName = _this$props.inputName,
          placeholder = _this$props.placeholder;
      var focused = this.state.focused;
      return _react.default.createElement(SearchWrapper, {
        focused: focused
      }, _react.default.createElement(SearchInput, {
        name: inputName,
        type: "text",
        maxLength: "100",
        autoCapitalize: "none",
        autoComplete: "off",
        autoCorrect: "off",
        ref: "searchInput",
        placeholder: placeholder,
        onClick: function onClick() {
          return _this5.handleInputClick();
        },
        onFocus: function onFocus() {
          return _this5.handleInputFocus();
        },
        onBlur: function onBlur() {
          return _this5.handleInputBlur();
        },
        onKeyUp: function onKeyUp() {
          return _this5.handleKeyChange();
        }
      }), _react.default.createElement(SearchClear, {
        focused: focused,
        onClick: function onClick() {
          return _this5.handleClearClick();
        }
      }, _react.default.createElement("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24"
      }, _react.default.createElement("g", {
        fill: "currentColor",
        fillRule: "evenodd"
      }, _react.default.createElement("path", {
        d: "M16.95 5.636l1.414 1.414L7.05 18.364 5.636 16.95z"
      }), _react.default.createElement("path", {
        d: "M16.95 18.364l1.414-1.414L7.05 5.636 5.636 7.05z"
      })))), _react.default.createElement(SearchSubmit, {
        focused: focused,
        onClick: function onClick() {
          return _this5.handleSearchClick();
        }
      }, _react.default.createElement("svg", {
        fill: "currentColor",
        viewBox: "0 0 24 24",
        height: "100%",
        width: "100%",
        preserveAspectRatio: "xMidYMid meet"
      }, _react.default.createElement("g", null, _react.default.createElement("path", {
        d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
      })))));
    }
  }]);

  return SearchBar;
}(_react.Component);

exports.default = SearchBar;

var SearchWrapper = _styledComponents.default.div(_templateObject(), function (props) {
  return props.focused ? '#ccc' : '#fff';
});

var SearchInput = _styledComponents.default.input(_templateObject2());

var SearchSubmit = _styledComponents.default.span(_templateObject3(), function (props) {
  return props.focused ? '#ccc' : '#fff';
});

var SearchClear = _styledComponents.default.span(_templateObject4(), function (props) {
  return props.focused ? '#ccc' : '#fff';
});