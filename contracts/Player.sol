pragma solidity ^0.4.24;

import './SoccerCoin.sol';

contract Player is SoccerCoin {

  modifier requireLevel(_level, _requiredLevel) {
    require(_level >= _requiredLevel);
    _;
  }

  function levelUp(uint _playerId) public {
    // when should they level up?
  }

  function increaseStats(uint _playerId, uint _offense, uint _defense, uint _speed) public {
    // when/how should we increase stats?
  }

}

