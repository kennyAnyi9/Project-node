/**
 * same process right
 * we import readTasks and updatetasks from storage
 * then we write a function updateStatus
 * function will take one arguement, taskId
 * we do all the neccessary validations and error handlings
 * then we read all tasks into a variable and alter it based on the ID provided
 */

const {readTasks, saveTasks} = require('../utils/storage')


const updateStatus = (status, taskId) => {
  //log error and exit if ID is not provided
  if(!taskId || !status){
    console.error("Cannot update task with no ID and/or status")
    process.exit(1);
  }
  
  //if task ID is provided then we need to validate it
  if(isNaN(taskId)){
    console.error("Task ID must be a number");
    process.exit(1);
  }

  //cast Valid ID as integer
  const id = parseInt(taskId);

  //read all tasks
  const allTasks = readTasks()

  //check whether task ID matches any index in the allTasks

  const taskIndex = allTasks.findIndex(task => task.id === id)

  //if index does not exist we log an error
  if (taskIndex === -1){
    console.error(`Task ${taskIndex} does not exist`)
  }

  //finally update the task status

  allTasks[taskIndex]={
    ...allTasks[taskIndex],
    status: status
  }

  // save updated task
  saveTasks(allTasks)

  console.log(`Task ${taskId} status changed to ${status}`)

}

module.exports = updateStatus;
