"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Suggestion = _interopRequireDefault(require("./Suggestion"));

var Suggestions = function Suggestions(_ref) {
  var places = _ref.places,
      hasResults = _ref.hasResults,
      clickHandler = _ref.clickHandler,
      cursorIdx = _ref.cursorIdx,
      mouseInSuggestions = _ref.mouseInSuggestions,
      getMouseInSuggestions = _ref.getMouseInSuggestions,
      selectColor = _ref.selectColor,
      isTouch = _ref.isTouch;

  var handleMouseEnter = function handleMouseEnter() {
    getMouseInSuggestions(true);
  };

  var handleMouseLeave = function handleMouseLeave() {
    getMouseInSuggestions(false);
  };

  return _react["default"].createElement("div", {
    style: {
      'position': 'relative',
      'display': hasResults ? 'flex' : 'none',
      'z-index': '9999',
      'background-color': '#fff',
      'border': '1px solid #ccc',
      'border-top': 'none',
      'border-color': '#d3d3d3',
      'border-bottom-left-radius': '3px',
      'border-bottom-right-radius': '3px'
    }
  }, _react["default"].createElement("div", {
    style: {
      width: '100%'
    },
    onMouseEnter: !isTouch && handleMouseEnter,
    onMouseLeave: !isTouch && handleMouseLeave
  }, places.map(function (place, idx) {
    return _react["default"].createElement(_Suggestion["default"], {
      selectColor: selectColor,
      mouseInSuggestions: mouseInSuggestions,
      idx: idx,
      isTouch: isTouch,
      cursorIdx: cursorIdx,
      clickHandler: clickHandler,
      key: place.id,
      place: place
    });
  })));
};

var _default = Suggestions;
exports["default"] = _default;