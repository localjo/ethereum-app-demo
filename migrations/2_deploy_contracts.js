var Election = artifacts.require("./Election.sol");
var Candidates = require('../candidates.json').names.map(x => web3.utils.asciiToHex(x));
module.exports = function(deployer) {
  deployer.deploy(Election, Candidates, {gas: 2900000});
};
