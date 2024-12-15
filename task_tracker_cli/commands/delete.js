/**
 * How are we gonna do this delete tasks sef
 * ofcourse we would need to read the tasks
 * then we would have to get the task by its id and delete it
 * then finally we would save the tasks and tell the user that the task has been deleted successfuly
 */

const {readTasks, saveTasks} = require('../utils/storage')


const del = (taskId) => {

    //cast the input into an integer
    const id = parseInt(taskId)
    //then validate the input
    if(isNaN(id)){
        console.error("Task not found, try again")
        process.exit(1)
    }
    //read existing tasks
    tasks = readTasks()

    //from the read tasks, find the index of the task in question
    const taskIndex = tasks.findIndex(task => task.id === id)

    //check if the tasks exists
    if(taskIndex === -1){
        console.error(`Task ${taskIndex} does not exist`)
        process.exit(1)
    }

    //remove it if it exists
    tasks.splice(taskIndex, 1)


    //save tasks and log the result to the user
   saveTasks(tasks);
   console.log(`task ${id} deleted successfully`)



}

module.exports = del;
