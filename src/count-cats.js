const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let result = matrix.flat().filter(t => t === '^^');
  return result.length;
};