const {readTasks, saveTasks} = require("../utils/storage")


/**
 * How do we update a task
 * we read the tasks into a variable
 * then we get the task by its id
 * then we update the task
 */



const update = (taskId, description) =>{
  if(!taskId || !description){
    console.error("Please specify task ID and/or description");
    process.exit(1);
  }
  //validate input
  if(isNaN(taskId)){
    console.error("task ID has to be a number")
  }

  //cast valid ID as integer
  const id = parseInt(taskId)

  //read all tasks
 const allTasks = readTasks();

 //find task which matches the specified index
 const taskIndex = allTasks.findIndex(task => task.id === id)

 //if task index does not exist, log an error message
 if(taskIndex === -1){
  console.error(`task with ID ${taskId} not found`)
  process.exit(1);
 }

  //update task with specified ID
  allTasks[taskIndex] = {
    ...allTasks[taskIndex],
    description: description,
    updatedAt: new Date().toISOString()
  }

  //save task and log success message
  saveTasks(allTasks);
  console.log(`Task ${taskId} updated successfully`)


}

//export the update function
module.exports = update;
