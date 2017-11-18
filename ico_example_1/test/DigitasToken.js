var MetaCoin = artifacts.require("DigitasToken");

contract('DigitasToken', function(accounts) {

  it("should put tokens in acc if given eth", function() {
    var instance;
    return MetaCoin.deployed().then((inst) => {
      instance = inst;

      return web3.eth.sendTransaction({from: accounts[1], to: inst.address, value: web3.toWei(0.1, "ether")}, (e,r) =>{
          instance.getBalance.call(accounts[1]).then((balance) => {
            assert.equal(web3.fromWei(balance.valueOf()), 10**5, "0.1 eth worth of digitas wasn't in the first account");
          });
      });
    });
  });

  it("should be able to report total tokens and eth", function() {
    var instance;
    return MetaCoin.deployed().then((inst) => {
      instance = inst;

      return web3.eth.sendTransaction({from: web3.eth.accounts[0], to: instance.address, value: web3.toWei(0.1, "ether")}, (e,r) =>{
          instance.getSelfBalance().then((balance) => {
            assert.equal(web3.fromWei(balance.valueOf()), 0.2, "contract misreporting raise");
          });
      });
    });
  });

  it("Shouldnt exceed cap", function() {
    var instance;
    return MetaCoin.deployed().then((inst) => {
      instance = inst;
      inst.getSupply().then(console.log);
      return web3.eth.sendTransaction({from: web3.eth.accounts[0], to: inst.address, value: web3.toWei(900, "ether")}, (e,r) =>{
          instance.getBalance.call(accounts[0]).then((balance) => {
            assert.isTrue(balance.valueOf() < 10**(18+6), "Ico coin purchase exceeds cap");
          });
      });
    });
  });



});
