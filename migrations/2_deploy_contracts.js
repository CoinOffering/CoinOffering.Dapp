module.exports = function (deployer) {
    deployer.deploy(Corporation);
    // deployer.deploy(TokenExchange.sol);
    deployer.deploy(ICO.sol);
};
