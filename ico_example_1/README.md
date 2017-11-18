# Readme:

This is a basic from scratch contract that can act as an ICO.
Ideally you'd use open-zeppelin to create crowdsales. 
This code is a good way to grep ico contract internals and understand the underlying mechanisms. 

This is built on the basic truffle webpack project and the same setup cmds apply i.e

```
npm install
// in another console start testrpc
truffle compile
truffle migrate
npm run dev
```

Files to checkout:
- contracts/digitasToken.sol
- test/DigitasToken.js
- test/testDigitasToken.sol
- app/javascripts/app.js
- app/index.html
