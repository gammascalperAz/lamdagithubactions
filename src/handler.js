'use strict';

module.exports.generateRandomNumber = event => {
  const randomNumber = parseInt(Math.random() * 100)
  console.log("The randonm generated integer is:", randomNumber);
  return randomNumber;
};
