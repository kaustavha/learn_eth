# Eth tut 1

# Intro

This is a demonstration of how ethereum can be used to run serverless dapps in the simplest form with the least amount of code, tooling or setup.  
In this example we'll be publishing a pre-written greeter contract which responds with the greeting phrase it is bootstrapped with. Then we'll attempt to call the greeting contracts greet function from our front-end js and render it.   

Quick learning assignment: Implement front-end js+html to change the greeting phrase in the greeter contract. 

![architecture](https://cdn-images-1.medium.com/max/1600/1*y7Cdz1uGBGLxZ3ekIE13RA.png)

## Requirements:
  - Chrome browser + meta-mask plugin
  - Nodejs
  
## Setup:
Run: 
`npm install && npm start`  
Switch to the rinkeby testnet using metamask and go to the browser address and you should see "Data: Hello world from rinkeby!"

### For truffle local dev:
```
npm install -g truffle ethereumjs-testrpc
```
Run testrpc server: `testrpc`  
Truffle commands:  
`truffle compile`	
`truffle migrate`

## Plan:
 - Brief intro to ethereum    
   https://whatthefuckisethereum.com/   
   https://www.slideshare.net/gavofyork/so-now-weve-built-ethereum-wtf-is-it  

 - Explain rinkeby test net, PoA, story of other nets   
   https://www.ethnews.com/ropsten-to-kovan-to-rinkeby-ethereums-testnet-troubles

 - Explain meta-mask & walk through getting on the Rinkeby testnet and requesting ether from faucet   
  https://www.rinkeby.io/    
  example gist: https://gist.github.com/kaustavha/278723949d5fa57393fe3dcedc808e1f  

 - Explain developing using Remix
   http://remix.ethereum.org/

 - Explain solidity   
   https://solidity.readthedocs.io/en/develop/     
   https://github.com/fivedogit/solidity-baby-steps/tree/master/contracts   
   https://solidity.readthedocs.io/en/develop/solidity-by-example.html    
   greeter contract used: https://github.com/fivedogit/solidity-baby-steps/blob/master/contracts/05_greeter.sol  

 - Explain contract ABI   
   https://github.com/ethereum/wiki/wiki/Ethereum-Contract-ABI#example-javascript-usage  

 - Explain bootup via web3    
   https://github.com/ethereum/wiki/wiki/JavaScript-API    
 - Walk through basic contract   
