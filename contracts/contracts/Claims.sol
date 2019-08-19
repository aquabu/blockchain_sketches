pragma solidity ^0.5.8;

contract Claims {
  string[] public claims;
  mapping (string => address) claimSigner;

  function put(string memory _claim) public {
    if (claimSigner[_claim] != address(0)) return revert();
    claimSigner[_claim] = msg.sender;
    claims.push(_claim);
  }
  
  function count() public view returns (uint256) {
      return claims.length;
  }

  function getSigner(string memory claim) public view returns (address _signer) {
    return claimSigner[claim];
  }

  function getClaim(uint256 index) public view returns (string memory _claim) {
    return claims[index];
  }
  
  function () external {
    revert();
  }
}