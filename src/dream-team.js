const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let result = Array.isArray(members) ? members.filter(t => typeof (t) === 'string') : [];
  if (result !== []) {
    let arr = [];
    result.forEach(a => arr.push(a.trim()[0].toUpperCase()));
    return arr.sort().join('');
  }
  return false;
};
