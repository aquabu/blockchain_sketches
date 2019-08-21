pragma solidity ^0.5.8;

contract Claims {
  bytes32[] public claims;
  mapping (bytes32 => address) claimSigner;

  function put(bytes32 _claim) public {
    // if (claimSigner[_claim] != address(0)) revert();
    claimSigner[_claim] = msg.sender;
    claims.push(_claim);
  }
  
  function count() public view returns (uint256) {
      return claims.length;
  }

  function getSigner(bytes32 claim) public view returns (address _signer) {
    return claimSigner[claim];
  }

  function getClaim(uint256 index) public view returns (bytes32 _claim) {
    return claims[index];
  }
  
  function () external {
    revert();
  }
}