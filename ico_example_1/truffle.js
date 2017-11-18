// Allows us to use ES6 in our migrations and tests.
require('babel-register')

module.exports = {
	networks: {
		development: {
			host: "localhost",
			port: 8545,
			gas: 5000000,
			network_id: "*"
		}
	},
	rpc: {
		host: "localhost",
		gas: 4712388,
		port: 8545
	},
	solc: {
		optimizer: {
			enabled: true,
			runs: 200
		}
	},
};