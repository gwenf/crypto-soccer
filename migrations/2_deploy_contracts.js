// var SoccerCoin = artifacts.require("Items.sol");

// module.exports = function(deployer) {
//   deployer.deploy(SoccerCoin, {gas: 6721975});
// };

var SoccerCoin = artifacts.require("Migrations.sol");

module.exports = function(deployer) {
 deployer.deploy(SoccerCoin, {gas: 6721975, gasPrice: 20000000000});
};
