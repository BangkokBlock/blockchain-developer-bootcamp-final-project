require("@nomiclabs/hardhat-waffle");

require('dotenv').config()
const keyData = process.env.PRIV_KEY
const projectId = process.env.INFURA_API_KEY;

module.exports = {
  defaultNetwork: 'hardhat',
  networks:{
    hardhat:{
      chainId: 1337//config standard
    },
    mumbai:{
      url: `https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts:[keyData]
    },
      mainnet: {
        url: `https://mainnet.infura.io/v3/${projectId}`,
        accounts:[keyData]
      },
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
