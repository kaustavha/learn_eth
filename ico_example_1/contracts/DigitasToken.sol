pragma solidity ^0.4.18;

contract DigitasToken {
	mapping (address => uint256) balances;
	uint256 cap;
	uint256 public supply;
	uint256 rate;

	string public name;
	string public symbol;
	uint public decimals; 

	function DigitasToken() {
		name = "Digitas Token";
		symbol = "DGT";
		decimals = 18;
		cap = 10**(6+decimals);
		supply = 10**(6+decimals);
		rate = 10**6;
	}

	function getBalance(address add) public constant returns(uint256 bal) {
		return balanceOf(add);
	}

	function balanceOf(address _owner) public constant returns(uint256 balance) {
		return balances[_owner];
	}

	function getSelfBalance() constant returns(uint256) {
		return this.balance;
	}

	function getSupply() constant returns(uint256) {
		return supply;
	}

	function buy() payable {
		if (supply > 0) {
			uint256 tokens = msg.value * rate;
			if (supply > tokens) {
				supply -= tokens;
				uint256 old = balances[msg.sender];
				tokens += old;
				balances[msg.sender] = tokens;
			}
		}
	}

	function () payable {
		if (supply > 0) {
			uint256 tokens = msg.value * rate;
			if (supply > tokens) {
				supply -= tokens;
				balances[msg.sender] += tokens;
			}
		}
	}
}
