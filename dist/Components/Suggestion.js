"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Suggestion = function Suggestion(_ref) {
  var place = _ref.place,
      clickHandler = _ref.clickHandler,
      cursorIdx = _ref.cursorIdx,
      idx = _ref.idx,
      selectColor = _ref.selectColor,
      mouseInSuggestions = _ref.mouseInSuggestions,
      isTouch = _ref.isTouch;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      hover = _useState2[0],
      setHover = _useState2[1];

  return _react["default"].createElement("div", {
    selectColor: selectColor,
    onMouseEnter: function onMouseEnter(e) {
      return setHover(true);
    },
    onMouseLeave: function onMouseLeave(e) {
      return setHover(false);
    },
    style: _objectSpread({}, cursorIdx === idx && !mouseInSuggestions && !isTouch ? {
      color: "white",
      background: selectColor
    } : null, {
      'font-size': '14px',
      'padding': '1rem 1.5rem 1rem 1.5rem',
      'cursor': 'pointer',
      'width': '100%'
    }, hover ? {
      color: 'white',
      'background-color': selectColor
    } : {}),
    onMouseDown: function onMouseDown(event) {
      return clickHandler({
        location: place,
        event: event
      });
    }
  }, place.place_name);
};

var _default = Suggestion;
exports["default"] = _default;