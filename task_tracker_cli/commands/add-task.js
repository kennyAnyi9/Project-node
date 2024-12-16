const {readTasks, saveTasks} = require('../utils/storage')



const add = (description) => {
  if(!description){
    console.error("Please add a task description");
    process.exit(1);
  }

  //read all tasks into a variable
  const tasks = readTasks()

  //write task
  const newTask = {
    id: tasks.length + 1,
    description: description,
    status: 'todo',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }

  tasks.push(newTask);
  console.log(`Task ${newTask.id} successfully added`);

  saveTasks(tasks);


}


module.exports = add;
