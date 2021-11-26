require("@nomiclabs/hardhat-waffle");
require('dotenv').config({ path: '.env.local' })

module.exports = {
  defaultNetwork: 'rinkeby',
  networks: {
    hardhat: {
      chainId: 1337//config standard
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
      accounts: [process.env.CONTRACT_PRIVATE_KEY]
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
      accounts: [process.env.CONTRACT_PRIVATE_KEY]
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
      accounts: [process.env.CONTRACT_PRIVATE_KEY]
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
