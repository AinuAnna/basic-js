const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (Array.isArray(arr) ) {
    let discardPrev = "--discard-prev",
     discardNext = "--discard-next",
     doublePrev = "--double-prev",
     doubleNext = "--double-next",
     result = new Array() ,
     modify = false;
    for (let i = 0; i < arr.length; i++) {
      switch (arr[i]) {
        case discardPrev:
          if (i === 0) { break }
          if (modify) { modify = false; break }
          result.pop();
          break;
        case discardNext:
          if (i === arr.length - 1) { break }
          modify = true;
          i += 1
          break;
        case doublePrev:
          if (i === 0) { break }
          if (modify) { modify = false; break }
          result.push(arr[i - 1]);
          break;
        case doubleNext:
          if (i === arr.length - 1) { break }
          result.push(arr[i + 1]);
          break;
        default:
          result.push(arr[i])
          modify = false;
          break;
      }
    }
    return result
  }
else {
  throw CustomError('Not implemented');
}
};

