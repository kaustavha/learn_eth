var DigitasToken = artifacts.require("./DigitasToken.sol");

module.exports = function(deployer) {
  deployer.deploy(DigitasToken);
};
