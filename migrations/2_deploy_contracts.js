var SoccerCoin = artifacts.require("SoccerCoin.sol");

module.exports = function(deployer) {
  // are we going to need to link any of the libraries?
  // deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(SoccerCoin);
};
