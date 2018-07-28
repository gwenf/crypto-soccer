var SoccerCoin = artifacts.require("Items.sol");

module.exports = function(deployer) {
  deployer.deploy(SoccerCoin, {gas: 6721975});
};
