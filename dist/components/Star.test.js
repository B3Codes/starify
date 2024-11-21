"use strict";

var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
var _Star = _interopRequireDefault(require("./Star"));
var _StarRatingContext = require("../context/StarRatingContext");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
describe('Star Component', function () {
  test('renders with default properties', function () {
    var _render = (0, _react2.render)(/*#__PURE__*/_react["default"].createElement(_StarRatingContext.StarRatingProvider, {
        totalStars: 5
      }, /*#__PURE__*/_react["default"].createElement(_Star["default"], {
        star: 1
      }))),
      getByLabelText = _render.getByLabelText;
    var star = getByLabelText('Rate 1 out of 5');
    expect(star).toBeInTheDocument();
    expect(star).toHaveStyle('color: gray');
  });
  test('updates color on hover', function () {
    var _render2 = (0, _react2.render)(/*#__PURE__*/_react["default"].createElement(_StarRatingContext.StarRatingProvider, {
        totalStars: 5
      }, /*#__PURE__*/_react["default"].createElement(_Star["default"], {
        star: 1
      }))),
      getByLabelText = _render2.getByLabelText;
    var star = getByLabelText('Rate 1 out of 5');
    _react2.fireEvent.mouseEnter(star);
    expect(star).toHaveStyle('color: gold');
  });
});