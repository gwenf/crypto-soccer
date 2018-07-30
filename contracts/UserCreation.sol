// not deployed

pragma solidity ^0.4.24;

import 'openzeppelin-solidity/contracts/math/SafeMath.sol';
import './SoccerCoin.sol';

contract UserCreation is SoccerCoin {

    using SafeMath for uint256;

	event NewUser(address user, uint id, string username);

	struct User {
	    string name;
	    uint reputation;
	    uint articleCount;
	    uint penaltyCount;
	    uint readyTime;
	    bool busyResearcher;
	    uint researchedArticlesCount;
	}

	User[] public users;
	uint totalUserCount = 0;

	mapping (address => uint) public ownerUserCount;
	mapping (address => uint) public findUserId;
	mapping (address => bool) public isResearcher;

	function createUser(string _name) public {
	    //check if owner already has an account
	    require(ownerUserCount[msg.sender] == 0);

	    //create new User
	    uint id = users.push(User(_name, 0, 0, 0, uint32(now), false, 0)).sub(1);

	    //add user to owner to user count mapping
	    ownerUserCount[msg.sender] = ownerUserCount[msg.sender].add(1);

	    //add user to is researcher mapping
	    isResearcher[msg.sender] = false;

	    // add user id to find user by address mapping
	    findUserId[msg.sender] = id;
	    totalUserCount = totalUserCount.add(1);

	    //for event new user
	    emit NewUser(msg.sender, id, _name);
	}

	// test function to create a researcher
	function createResearcher() public {
	    isResearcher[msg.sender] = true;
	}
	// end test funtion

	function findUserInfo() public view returns(string, uint, uint, uint, uint, bool){
	    // So you can only request you own info
	    require(ownerUserCount[msg.sender] == 1);
	    //look up id
	    uint id = findUserId[msg.sender];
	    //return requested info
	    return (users[id].name, users[id].reputation, users[id].articleCount, users[id].penaltyCount, users[id].readyTime, users[id].busyResearcher);
	}

	function _etToatalUserCount() public view returns(uint) {
	    return totalUserCount;
	}

}
