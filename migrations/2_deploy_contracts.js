var SoccerCoin = artifacts.require("Item.sol");

module.exports = function(deployer) {
  deployer.deploy(Item);
};
