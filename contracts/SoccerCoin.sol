pragma solidity 0.4.24;

import 'openzeppelin-solidity/contracts/ownership/Ownable.sol';
import 'openzeppelin-solidity/contracts/math/SafeMath.sol';
import 'openzeppelin-solidity/contracts/token/ERC721/ERC721Token.sol';

contract SoccerCoin is Ownable, SafeMath, ERC721Token {
  string public constant name = "SoccerCoin";
  string public constant symbol = "SCR";

  using SafeMath for uint;

  struct Player {
    string name;
    uint level;
    uint offense;
    uint defense;
    uint speed;
    uint dna;
  }

  Player[] public players;
  mapping (address => uint[]) userToPlayers;
  mapping (address => uint) userPlayerCount;
  mapping (uint => address) public playerToUser;
  mapping (uint => address) public playerToApproved;

  function totalSupply() public view returns (uint) {
    return players.length;
  }

  function balanceOf(address _owner) public view returns (uint) {
    return userPlayerCount[_owner];
  }

  function ownerOf(uint _tokenId) public view returns (address) {
    return playerToUser[_tokenId];
  }

  function newPlayer(string _name) public returns(uint) {
    require(!userToPlayers[_to]);

    createPlayer(_name, _to);
  }

  function createPlayer(string _name, address _to, uint _dna) internal {
    uint id = players.length;
    players.push(Player({
      name: _name,
      level: 1,
      offense: 1,
      defense: 1,
      speed: 1,
      dna: _dna
    }));
    userToPlayers[msg.sender].push(id);

    _mint(_to, id);
  }

  function transfer(address _to, uint _tokenId) external onlyOwnerOf(_tokenId) {
    require(_to != address(0));
    
    playerToUser[_tokenId] = _to;
    _transfer(msg.sender, _to, _tokenId);
  }

  function approve(address _to, uint _tokenId) public onlyOwnerOf(_tokenId) {
    require(_to != address(0));

    playerToApproved[_tokenId] = _to;
    Approval(msg.sender, _to, _tokenId);
  }

  function takeOwnership(uint _tokenId) public {
    require(playerToApproved[_tokenId] == msg.sender);
    address owner = ownerOf(_tokenId);
    _transfer(owner, msg.sender, _tokenId);
  }

}
