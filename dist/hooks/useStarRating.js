"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStarRating = void 0;
var _react = require("react");
var _StarRatingContext = require("../context/StarRatingContext");
var useStarRating = exports.useStarRating = function useStarRating() {
  var context = (0, _react.useContext)(_StarRatingContext.StarRatingContext);
  if (!context) {
    throw new Error('useStarRating must be used within a StarRatingProvider');
  }
  return context;
};