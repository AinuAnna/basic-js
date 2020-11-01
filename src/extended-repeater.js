const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  let newStr = String(str);
let result = "";
let option = {
    repeatTimes: 1,
    separator: "+",
    addition: "",
    additionRepeatTimes: 0,
    additionSeparator: "|"
}
if(options !== undefined)
{
  Object.keys(options).map((i) => {
    option[i] = String(options[i]);
  })
}

newStr = newStr + option.addition;
for (let j = 1; j < option.additionRepeatTimes; j++) {
  newStr = newStr + option.additionSeparator + option.addition;
}
result = newStr;
for (let i = 1; i < option.repeatTimes; i++) {
  result = result + option.separator + newStr;
}
return result;
};
