const {readTasks} = require('../utils/storage')

const list = (filter = null) => {
//read all tasks into a variable
  const tasks = readTasks();

  //if no tasks exists
  if(tasks.length === 0){
    console.log('No tasks found');
    return [];
  }

  //Filter tasks based on the provided filter
  const filteredTasks = filter ? tasks.filter(task => task.status === filter) : tasks;

  //Display tasks
  console.log('Tasks:');
  tasks.forEach(task => {
    console.log(`ID: ${task.id}`);
    console.log(`Description: ${task.description}`);
    console.log(`Status: ${task.status}`);
    console.log(`Created At: ${new Date(task.createdAt).toLocaleString()}`);
    console.log(`Updated At: ${new Date(task.updatedAt).toLocaleString()}`);
    console.log('----------------');
  });

  return filteredTasks;
}

module.exports = list;
