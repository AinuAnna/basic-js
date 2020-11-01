const CODE = 65;
const LETTERS = 26;

class VigenereCipheringMachine {

  constructor(reverseType) {
      this.reverseType = reverseType;
  }

  encrypt(message, key) {

      if (typeof message === 'undefined' || typeof key === 'undefined') {
          throw new Error();
      }

      const upMsg = message.toUpperCase();
      const keys = key.toUpperCase();
      let result = '';
      let keyCount = 0;

      for (let i = 0; i < upMsg.length; i++) {

          if (upMsg[i].charCodeAt(0) < CODE || upMsg[i].charCodeAt(0) > 91) {
              result += upMsg[i];
              continue;
          }

          let keyI = keyCount % keys.length;
          keyCount++;

          result += String.fromCharCode((((upMsg[i].charCodeAt(0) - CODE) + (keys[keyI].charCodeAt(0) - CODE)) % LETTERS) + CODE);
      }

      if (this.reverseType === false) {
          return result.split('').reverse().join('');
      }

      return result;

  }

  decrypt(msg, key) {

      if (typeof msg === 'undefined' || typeof key === 'undefined') {
          throw new Error();
      }

      const upMsg = msg.toUpperCase();
      const keys = key.toUpperCase();
      let result = '';
      let keyCount = 0;


      for (let i = 0; i < upMsg.length; i++) {

          if (upMsg[i].charCodeAt(0) < CODE || upMsg[i].charCodeAt(0) > 91) {
              result += upMsg[i];
              continue;
          }
          let keyI = keyCount % keys.length;
          keyCount++;
          result += String.fromCharCode((((upMsg[i].charCodeAt(0) - CODE) + LETTERS - (keys[keyI].charCodeAt(0) - CODE)) % LETTERS) + CODE);
      }
      if (this.reverseType === false) {
          return result.split('').reverse().join('');
      }
      return result;
  }
}

module.exports = VigenereCipheringMachine;