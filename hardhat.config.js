require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env.local" });

module.exports = {
  defaultNetwork: "rinkeby",
  networks: {
    hardhat: {
      chainId: 1337, //config standard
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
      accounts: [process.env.CONTRACT_PRIVATE_KEY],
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
      accounts: [process.env.CONTRACT_PRIVATE_KEY],
    },
  },
  solidity: {
    version: "0.8.10",
    networks: {
      rinkeby: {
        url: process.env.NEXT_PUBLIC_INFURA_URL,
        accounts: [process.env.TOKEN_PRIVATE_KEY],
      },
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
