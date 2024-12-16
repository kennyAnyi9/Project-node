/**
 * Now we need to think about how to add tasks using addTask function
 * in order to add a task we will sure do read all tasks and as well save the added task right
 */

const {readTasks, saveTasks} = require('../utils/storage')


const add =(description)=>{

    if(!description){
        console.error("You have to add a task description")
        return;
    }

    //now how do we add the task
    // I think we need to read what is already avalable into a variable
    const tasks = readTasks()

    // then we write code to add to what we read from
    const newTask = {
        id: tasks.length + 1,
        description: description,
        status: 'todo',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    }

    tasks.push(newTask)
    // then we use the saveTask function imported to save the task
    saveTasks(tasks)

    console.log(`task ${newTask.id} added successfully`)

}

module.exports = add;
