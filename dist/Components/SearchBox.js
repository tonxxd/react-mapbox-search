"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Suggestions = _interopRequireDefault(require("./Suggestions"));

var _SearchInput = _interopRequireDefault(require("./SearchInput"));

var _helpers = _interopRequireDefault(require("../utils/helpers"));

var isTouch = "ontouchstart" in window || navigator.msMaxTouchPoints > 0;

var SearchBox =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(SearchBox, _React$Component);

  function SearchBox(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, SearchBox);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(SearchBox).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleInputChange", function (event) {
      _this.setState({
        query: event.target.value
      }, function () {
        _this.sendQuery();
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "showResults", function () {
      var _this$state = _this.state,
          queryResults = _this$state.queryResults,
          inputFocused = _this$state.inputFocused;
      return queryResults.length > 0 && inputFocused;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClick", function (_ref) {
      var event = _ref.event,
          location = _ref.location;

      _this.setState({
        query: location.place_name,
        cursorIdx: 0,
        getMouseInSuggestions: false
      });

      if (_this.props.callback) {
        _this.props.callback({
          location: location,
          event: event
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleArrowKeys", function (event) {
      if (_this.state.getMouseInSuggestions) {
        return;
      }

      var keyIsLetter = event.keyCode >= 65 && event.keyCode <= 90;
      var keyIsBackspace = event.keyCode == 8;

      if ((keyIsLetter || keyIsBackspace) && _this.state.cursorIdx !== 0) {
        _this.setState({
          cursorIdx: 0
        });
      }

      var _this$state2 = _this.state,
          queryResults = _this$state2.queryResults,
          cursorIdx = _this$state2.cursorIdx;

      switch (event.keyCode) {
        case 38:
          {
            // up arrow pressed
            event.preventDefault();
            if (_this.showResults() && cursorIdx > 0) _this.setState(function (prevState) {
              return {
                cursorIdx: prevState.cursorIdx - 1
              };
            });
            break;
          }

        case 40:
          {
            // down arrow pressed
            event.preventDefault();
            if (_this.showResults() && cursorIdx < queryResults.length - 1) _this.setState(function (prevState) {
              return {
                cursorIdx: prevState.cursorIdx + 1
              };
            });
            break;
          }

        case 13:
          {
            // enter pressed
            event.preventDefault();

            if (_this.showResults()) {
              document.activeElement.blur();

              _this.handleClick({
                location: queryResults[cursorIdx]
              });
            }

            break;
          }
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getMouseInSuggestions", function (bool) {
      var cursorIdx = _this.state.cursorIdx;

      _this.setState(function (prevState) {
        if (prevState !== bool) {
          _this.setState({
            getMouseInSuggestions: bool
          });
        }
      });

      if (bool && cursorIdx !== 0) {
        _this.setState({
          cursorIdx: 0
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleFocus", function () {
      _this.setState({
        inputFocused: true
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleBlur", function () {
      _this.setState({
        inputFocused: false
      });
    });
    _this.state = {
      query: props.query,
      queryResults: [],
      cursorIdx: 0,
      getMouseInSuggestions: false,
      inputFocused: false
    };
    return _this;
  }

  (0, _createClass2["default"])(SearchBox, [{
    key: "sendQuery",
    value: function () {
      var _sendQuery = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        var _this$props, token, country, queryResults;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this$props = this.props, token = _this$props.token, country = _this$props.country;
                _context.prev = 1;
                _context.next = 4;
                return (0, _helpers["default"])(this.state.query, token, country);

              case 4:
                queryResults = _context.sent;

                if (!queryResults.error) {
                  _context.next = 7;
                  break;
                }

                throw Error(queryResults.error);

              case 7:
                this.setState({
                  queryResults: queryResults.response.features
                });
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](1);
                console.log("Error connecting to MapBox api, check internet / api token");

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 10]]);
      }));

      function sendQuery() {
        return _sendQuery.apply(this, arguments);
      }

      return sendQuery;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this$state3 = this.state,
          queryResults = _this$state3.queryResults,
          query = _this$state3.query,
          cursorIdx = _this$state3.cursorIdx,
          getMouseInSuggestions = _this$state3.getMouseInSuggestions;
      return _react["default"].createElement("div", {
        style: {
          width: '100%',
          height: 42
        },
        onMouseLeave: !isTouch && this.handleMouseLeave,
        onKeyDown: !isTouch && this.handleArrowKeys,
        onMouseEnter: !isTouch && this.handleMouseEnter
      }, _react["default"].createElement(_SearchInput["default"], {
        hasResults: this.showResults(),
        value: query,
        handleFocus: this.handleFocus,
        handleBlur: this.handleBlur,
        searchHint: this.props.searchHint,
        handleInputChange: this.handleInputChange
      }), _react["default"].createElement(_Suggestions["default"], {
        places: queryResults,
        selectColor: this.props.selectColor,
        hasResults: this.showResults(),
        clickHandler: this.handleClick,
        isTouch: isTouch,
        cursorIdx: cursorIdx,
        mouseInSuggestions: getMouseInSuggestions,
        getMouseInSuggestions: this.getMouseInSuggestions
      }));
    }
  }]);
  return SearchBox;
}(_react["default"].Component);

SearchBox.propTypes = {
  /**
   *  token for MapBox api
   */
  token: _propTypes["default"].string.isRequired,

  /**
   *  ISO 3166-1 country code for MapBox api to narrow search
   */
  country: _propTypes["default"].string,

  /**
   *  callback function when user clicks suggestion, provides location object and click event object (when mouse click) as arguments
   */
  callback: _propTypes["default"].func,

  /**
   *  color of currently selected suggestion
   */
  selectColor: _propTypes["default"].string,

  /**
   *  hint text for input
   */
  searchHint: _propTypes["default"].string,

  /**
   *  default query text
   */
  query: _propTypes["default"].string
};
SearchBox.defaultProps = {
  country: undefined,
  selectColor: "#58a",
  callback: undefined,
  searchHint: "Search",
  query: ""
};
var _default = SearchBox;
exports["default"] = _default;