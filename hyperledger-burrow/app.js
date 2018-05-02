var contracts = require('@monax/legacy-contracts');

// URL to the rpc endpoint of the Burrow server.
var burrowURL = "http://localhost:1337/rpc";
// See the 'Private Keys and Signing' section below for more info on this.
var accountData = require(`${process.env.HOME}/.monax/chains/test_chain/accounts.json`).test_chain_full_000;

// newContractManagerDev lets you use an accountData object (address & private key) directly, i.e. no key/signing daemon is needed. This should only be used while developing/testing.
var contractManager = contracts.newContractManagerDev(burrowURL, accountData);

var myAbi = require(`${process.env.HOME}/.monax/apps/idi/abi/abi.json`);
// var myCompiledCode = fs.readFileSync('/Users/alexeigherman/.monax/apps/idi/abi/assembly');
var myCompiledCode = require(`${process.env.HOME}/.monax/apps/idi/abi/compiled.json`).object;

var myContractFactory = contractManager.newContractFactory(myAbi);

// To create a new instance and simultaneously deploy a contract use `new`:
// var myNewContract;
// myContractFactory.new({data: myCompiledCode}, function(error, contract){
//     if (error) {
//         // Something.
//         throw error;
//     }
//     myNewContract = contract;
// 	console.log(myNewContract);
// });

const contractAddress = accountData.address;

var myExistingContract;

myContractFactory.at(contractAddress, function(error, contract){
    if (error) {
        // Something.
        throw error;
    }
    myExistingContract = contract;
	const result = contract.set(2, {from: contractAddress }, function() {
		console.log('callback');
		console.log(arguments);
	});
	// console.log(result);
	//
	// const r = contract.get();
	// console.log(r);
});
