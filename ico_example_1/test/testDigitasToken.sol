pragma solidity ^0.4.2;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/DigitasToken.sol";

contract testDigitasToken {
  function testInitialBalanceWithNewMetaCoin() {
    DigitasToken meta = new DigitasToken();

    uint expected = 0;

    Assert.equal(meta.balanceOf(tx.origin), expected, "Owner should have 10000 MetaCoin initially");
  }

  function testGetSelfBal() {
    DigitasToken meta = new DigitasToken();
    uint256 exp = 0;
    Assert.equal(meta.getSelfBalance(), exp, "Meta should have 0 raised at start");
  }

}
