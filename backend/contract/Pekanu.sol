// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.5.0 <0.9.0;

contract Pekanu{
    address public admin;
    constructor(){
        admin=msg.sender;
    }
    //Step 1
    struct Task{
        address user;
        address worker;
        string Fdesc;
        string Pdesc;
        uint hs;// hash value of S
        uint k;//number_of_solutions;
        uint h;//accumulator value of responses
        uint[] v;//task targeted set
        uint[2] cm;//Commitment
    }
    mapping(uint=>Task) private tasks;
    mapping(address=>uint[]) private tasksByUser;
    mapping(address=>mapping(uint=>Task)) private taskById;
    uint private taskId;
    //Step 2
    function submitTask(string memory _fdesc,uint _hs,string memory _pdesc,uint[] memory _tasks) public returns(bool){
        taskId++;
        uint[2] memory _cm;
        tasks[taskId]=Task(msg.sender,address(0),_fdesc,_pdesc,_hs,0,0,_tasks,_cm);
        tasksByUser[msg.sender].push(taskId);
        return true;
    }
    // Step 3
    function getTaskById(address user, uint id) public view returns(string memory ,string memory,uint,uint[] memory){
        require(user != address(0) && id<= taskId,"Task Not Exist");
        Task memory _task = taskById[user][id];
        return (_task.Pdesc,_task.Fdesc,_task.hs,_task.v);
    }
    // This function will sends the the task raised by user --> Array
    function getTasks_Associated_User(address user) public view userExist(user) returns(Task[] memory){
        uint[] memory _ids= tasksByUser[user];
        uint len = _ids.length;
        Task[] memory _tasks;
        for(uint i=0;i<len;i++){
            _tasks[i]=taskById[user][_ids[i]];
        }
        return _tasks;
    }

    modifier userExist(address user){
        require(user != address(0),"Task Not Exist");
        _;
    }

}
