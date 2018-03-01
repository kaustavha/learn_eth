# Info

Repo for linking to different ethereum and blockchain experiments.

# Index

- ENS_data_analysis
ELK stack project for data analysis on name registration and events on the Ethereum Name Service. Requires a more robust distributed event aggregation service  

- eth-lightShow-uottahack
Art project from hackathon. 3D printed IoT device featuring arduino, LED lights, live multi-user interaction, nodeJs backend and ethereum integration for firing and storing events which affect the device. Requires a more IoT centric plasma sidechain or private chain. [Article](https://medium.com/@kaustavha/lightshow-ethereum-iot-device-uottahack-72b27f903545)  

- ethwaterloo-bit
Basic identity on the blockchain PoC. Allows easy login to dapps using current standard social networks like FB and creation of a federated onchain identity and migration of social networks and data while allowing account recovery in private key loss scenarios. Hopefully will act as a substrate layer for future onchain social networks. 

- ico_example_1
Example of a simplistic ICO for an interview

- pet-shop-tut
Truffle petshop tutorial. TODO: Create similiar one using MIT licensed ethersjs

- static_example
Example of a static ethereum backed site for beginners workshops  

# Eth tut 1

# Intro for static_example

This is a demonstration of how ethereum can be used to run serverless dapps in the simplest form with the least amount of code, tooling or setup.  
In this example we'll be publishing a pre-written greeter contract which responds with the greeting phrase it is bootstrapped with. Then we'll attempt to call the greeting contracts greet function from our front-end js and render it.   

Quick learning assignment: Implement front-end js+html to change the greeting phrase in the greeter contract.

![architecture](https://cdn-images-1.medium.com/max/1600/1*y7Cdz1uGBGLxZ3ekIE13RA.png)

## Requirements:
  - Chrome browser + meta-mask plugin
  - Nodejs

## Setup:
Run:
`cd static_example`  
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

## Note:
There are other repositories in this folder with their own readmes and setup instructions and purpose
