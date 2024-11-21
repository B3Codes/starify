"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _useStarRating2 = require("../hooks/useStarRating");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var Star = /*#__PURE__*/(0, _react.memo)(function (_ref) {
  var star = _ref.star,
    size = _ref.size,
    _ref$filledColor = _ref.filledColor,
    filledColor = _ref$filledColor === void 0 ? 'gold' : _ref$filledColor,
    _ref$unfilledColor = _ref.unfilledColor,
    unfilledColor = _ref$unfilledColor === void 0 ? 'gray' : _ref$unfilledColor,
    _ref$symbol = _ref.symbol,
    symbol = _ref$symbol === void 0 ? '★' : _ref$symbol;
  var _useStarRating = (0, _useStarRating2.useStarRating)(),
    rating = _useStarRating.rating,
    hover = _useStarRating.hover,
    setRating = _useStarRating.setRating,
    setHover = _useStarRating.setHover,
    handleKeyDown = _useStarRating.handleKeyDown,
    totalStars = _useStarRating.totalStars;
  var isFilled = star <= (hover || rating);
  return /*#__PURE__*/_react["default"].createElement("span", {
    className: "star",
    role: "radio",
    "aria-checked": rating === star,
    tabIndex: 0,
    onClick: function onClick() {
      return setRating(star);
    },
    onMouseEnter: function onMouseEnter() {
      return setHover(star);
    },
    onMouseLeave: function onMouseLeave() {
      return setHover(0);
    },
    onKeyDown: function onKeyDown(event) {
      return handleKeyDown(event, star);
    },
    style: {
      cursor: 'pointer',
      fontSize: size,
      color: isFilled ? filledColor : unfilledColor
    },
    "aria-label": "Rate ".concat(star, " out of ").concat(totalStars)
  }, symbol);
});
Star.propTypes = {
  star: _propTypes["default"].number.isRequired,
  size: _propTypes["default"].string,
  filledColor: _propTypes["default"].string,
  unfilledColor: _propTypes["default"].string,
  symbol: _propTypes["default"].string
};
var _default = exports["default"] = Star;