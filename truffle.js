// Allows us to use ES6 in our migrations and tests.
require('babel-register')

module.exports = {
  networks: {
    development: { // Connects to testrpc when running on port 8550
      host: 'localhost',
      port: 8550,
      network_id: '*' // Match any network id
    },
    testnet: { // Connects to a public testnet running with geth on port 8545
      host: 'localhost',
      port: 8545,
      network_id: '*' // Match any network id
    }
  }
}
