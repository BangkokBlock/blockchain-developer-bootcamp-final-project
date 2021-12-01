/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("dotenv").config({ path: ".env.local" });
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.10",
  networks: {
    rinkeby: {
      url: process.env.NEXT_PUBLIC_INFURA_URL,
      accounts: [process.env.CONTRACT_PRIVATE_KEY],
    },
  },
};