module.exports = {

  contracts_directory: './contracts/',
  contracts_build_directory: './build/contracts',
  migrations_directory: './migrations',

  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
  },
  

  compilers: {
    solc: {
      version: "0.8.4",    // Fetch exact version from solc-bin (default: truffle's version)
      optimizer: {
        enabled: false,
        runs: 200
      },
    }
  },
}
