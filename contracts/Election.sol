pragma solidity ^0.4.6;

contract Election {
  // Declare public variables in the Election contract
  bytes32[] public candidateList; // Array of names of candidates
  mapping (bytes32 => uint8) public votesReceived; // Associative array of votes per candidate

  // Election constructor, takes array of candidate names
  function Election(bytes32[] candidateNames) {
    candidateList = candidateNames;
  }

  // Get the vote count for a candidate
  function getVoteCount(bytes32 candidate) returns (uint8) {
    if (isCandidate(candidate) == false) throw;
    return votesReceived[candidate];
  }

  // Cast a vote for a candidate
  function castVote(bytes32 candidate) {
    if (isCandidate(candidate) == false) throw;
    votesReceived[candidate] += 1;
  }

  // Check if candidate is in candidateList
  function isCandidate(bytes32 candidate) returns (bool) {
    for(uint i = 0; i < candidateList.length; i++) {
      if (candidateList[i] == candidate) {
        return true;
      }
    }
    return false;
  }
}
