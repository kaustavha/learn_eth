pragma solidity ^0.4.17;
/* 
    The following is an extremely basic example of a solidity contract. 
    It takes a string upon creation and then repeats it when greet() is called.
*/
contract Greeter {         // The contract definition. A constructor of the same name will be automatically called on contract creation. 

    address creator;     // At first, an empty "address"-type variable of the name "creator". Will be set in the constructor.
    string greeting;     // At first, an empty "string"-type variable of the name "greeting". Will be set in constructor and can be changed.

    modifier isCreator {
        require(msg.sender == creator); // only allow this action if the account sending the signal is the creator
        _; // Run the rest of the function that used the modifier
    }

    function Greeter(string _greeting) public payable {
        // The constructor. It accepts a string input and saves it to the contract's "greeting" variable.
        creator = msg.sender;
        greeting = _greeting;
    }

    // public functions are part of contract interface, accessible locally and externally
    // http://solidity.readthedocs.io/en/develop/contracts.html#visibility-and-getters
    // contant functions do not modify state
    // http://solidity.readthedocs.io/en/develop/contracts.html#view-functions
    function greet() public constant returns (string) {
        return greeting;
    }
    
    // view is alias for constant and appears more in docs
    function getBlockNumber() public view returns (uint) {
    // this doesn't have anything to do with the act of greeting
    // just demonstrating return of some global variable
        return block.number;
    }
    
    function setGreeting(string _newgreeting) public {
        greeting = _newgreeting;
    }
    
     /**********
     Standard kill() function to recover funds 
     **********/
    function kill() external isCreator {
        selfdestruct(creator);          // kills this contract and sends remaining funds back to creator
    }
}
