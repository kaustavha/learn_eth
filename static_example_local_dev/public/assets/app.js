var ABI = [{"constant":false,"inputs":[],"name":"kill","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getBlockNumber","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_newgreeting","type":"string"}],"name":"setGreeting","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"greet","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"inputs":[{"name":"_greeting","type":"string"}],"payable":false,"type":"constructor"}]
var rinkebyAddress = '0xa016a2a7760f7779e5f0c1ae8788415547c67caa';

function main() {
    // Debugging output, check if web3 is working properly
    console.log('Web3 found from MetaMask?: ' + (typeof web3 !== 'undefined'))
    console.log('Web3 connected?: ' + web3.isConnected());

    // Create JS API from contract ABI & bytecode located on rinkeby
    var greeterContract = web3.eth.contract(ABI).at(rinkebyAddress);

    // See what our greeter says
    greeterContract.greet(function(err, data) {
        console.log(err);
        console.log(data);
        document.body.innerHTML += "<p> Err: " + err + "</p>";
        document.body.innerHTML += "<p> Data: " + data + "</p>";
    });
}

// Wait for load event to get metamask injected web3
window.addEventListener('load', function() {
  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== 'undefined') {
    // Use Mist/MetaMask's provider
    window.web3 = new Web3(web3.currentProvider);
  } else {
    console.log('No web3? You should consider trying MetaMask!')
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    window.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  }
  main();
});