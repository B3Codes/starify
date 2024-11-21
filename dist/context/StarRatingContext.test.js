"use strict";

var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
var _StarRatingContext = require("./StarRatingContext");
var _useStarRating = require("../hooks/useStarRating");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
describe('StarRatingContext', function () {
  test('updates rating state', function () {
    var wrapper = function wrapper(_ref) {
      var children = _ref.children;
      return /*#__PURE__*/_react["default"].createElement(_StarRatingContext.StarRatingProvider, null, children);
    };
    var _renderHook = (0, _react2.renderHook)(function () {
        return (0, _useStarRating.useStarRating)();
      }, {
        wrapper: wrapper
      }),
      result = _renderHook.result;
    (0, _react2.act)(function () {
      result.current.setRating(3);
    });
    expect(result.current.rating).toBe(3);
  });
  test('throws error when used outside provider', function () {
    expect(function () {
      return (0, _react2.renderHook)(function () {
        return (0, _useStarRating.useStarRating)();
      });
    }).toThrow('useStarRating must be used within a StarRatingProvider');
  });
});