  
const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(activity) {
  let result;
  let k = Math.log(2) / HALF_LIFE_PERIOD;
  if (typeof (activity) != "string") {
    return false
  } else {
    if (Number(activity) > 0 && Number(activity) < MODERN_ACTIVITY ) {

      result = Math.round(Math.log(MODERN_ACTIVITY / Number(activity)) / k);
    } else {
      return false;

    }
  }
  return result;
};
