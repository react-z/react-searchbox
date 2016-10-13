'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchBar = function (_React$Component) {
  _inherits(SearchBar, _React$Component);

  _createClass(SearchBar, null, [{
    key: 'defaultProps',
    get: function get() {
      return {
        placeholder: 'Search',
        autoFocus: false
      };
    }
  }, {
    key: 'propTypes',
    get: function get() {
      return {
        inputName: _react2.default.PropTypes.string,
        placeholder: _react2.default.PropTypes.string,
        autoFocus: _react2.default.PropTypes.bool,
        onKeyChange: _react2.default.PropTypes.func,
        onSearchClick: _react2.default.PropTypes.func,
        onClearClick: _react2.default.PropTypes.func
      };
    }
  }]);

  function SearchBar(props) {
    _classCallCheck(this, SearchBar);

    var _this = _possibleConstructorReturn(this, (SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call(this, props));

    _this.state = {
      searchValue: '',
      focused: true
    };
    return _this;
  }

  _createClass(SearchBar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.autoFocus) {
        this.focusInput();
      }
    }
  }, {
    key: 'focusInput',
    value: function focusInput() {
      var _this2 = this;

      _reactDom2.default.findDOMNode(this.refs.searchInput).placeholder = '';
      _reactDom2.default.findDOMNode(this.refs.searchInput).value = '';
      setTimeout(function () {
        _reactDom2.default.findDOMNode(_this2.refs.searchInput).focus();
      }, 100);
    }
  }, {
    key: 'handleInputBlur',
    value: function handleInputBlur(e) {
      var placeholder = this.props.placeholder;
      //ReactDOM.findDOMNode(this.refs.searchInput).value = ''

      _reactDom2.default.findDOMNode(this.refs.searchInput).placeholder = placeholder;
      this.setState({ focused: false });
    }
  }, {
    key: 'handleInputFocus',
    value: function handleInputFocus(e) {
      this.focusInput();
      this.setState({ focused: false });
    }
  }, {
    key: 'handleInputClick',
    value: function handleInputClick(e) {
      this.focusInput();
      this.setState({ focused: false });
    }
  }, {
    key: 'handleKeyChange',
    value: function handleKeyChange(e) {
      var _this3 = this;

      var searchValue = this.state.searchValue;

      this.setState({ searchValue: this.refs.searchInput.value }, function () {
        if (_this3.props.onKeyChange !== undefined) {
          _this3.props.onKeyChange(searchValue);
        }
      });
    }
  }, {
    key: 'handleSearchClick',
    value: function handleSearchClick() {
      var searchValue = this.state.searchValue;

      if (this.props.onSearchClick !== undefined) {
        this.props.onSearchClick(searchValue);
      }
    }
  }, {
    key: 'handleClearClick',
    value: function handleClearClick() {
      var _this4 = this;

      var searchValue = this.state.searchValue;

      this.refs.searchInput.value = '';
      this.setState({ searchValue: '' }, function () {
        if (_this4.props.onClearClick !== undefined) {
          _this4.props.onClearClick(searchValue);
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      var _props = this.props;
      var inputName = _props.inputName;
      var placeholder = _props.placeholder;
      var focused = this.state.focused;


      var wrapperClass = focused ? 'search__wrapper search__focus' : 'search__wrapper';
      var submitClass = focused ? 'search__submit search__focus' : 'search__submit';
      var clearClass = focused ? 'search__clear search__focus' : 'search__clear';

      return _react2.default.createElement(
        'div',
        { className: wrapperClass },
        _react2.default.createElement('input', { className: 'search__input',
          name: inputName,
          type: 'text',
          maxLength: '100',
          autoCapitalize: 'none',
          autoComplete: 'off',
          autoCorrect: 'off',
          ref: 'searchInput',
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
          } }),
        _react2.default.createElement('span', { className: clearClass,
          onClick: function onClick() {
            return _this5.handleClearClick();
          } }),
        _react2.default.createElement(
          'span',
          { className: submitClass,
            onClick: function onClick() {
              return _this5.handleSearchClick();
            } },
          _react2.default.createElement(
            'svg',
            { viewBox: '0 0 24 24', height: '100%', width: '100%', preserveAspectRatio: 'xMidYMid meet' },
            _react2.default.createElement(
              'g',
              null,
              _react2.default.createElement('path', { d: 'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z' })
            )
          )
        )
      );
    }
  }]);

  return SearchBar;
}(_react2.default.Component);

exports.default = SearchBar;