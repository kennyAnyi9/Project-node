const { readTasks, saveTasks } = require('../utils/storage');

function del(taskId) {
    // Check if taskId is provided
  if (!taskId) {
    console.log('Please provide a task ID to delete');
    process.exit(1);
}
    // Convert taskId to a number
    const id = parseInt(taskId);

    // Validate input
    if (isNaN(id)) {
        console.error('Invalid task ID. Please provide a valid number.');
        process.exit(1);
    }

    // Read existing tasks
    const tasks = readTasks();

    // Find the index of the task with the given ID
    const taskIndex = tasks.findIndex(task => task.id === id);

    // Check if task exists
    if (taskIndex === -1) {
        console.error(`Task with ID ${id} not found.`);
        process.exit(1);
    }

    // Remove the task
    tasks.splice(taskIndex, 1);

    // Save updated tasks
    saveTasks(tasks);

    console.log(`Task with ID ${id} deleted successfully.`);
}

module.exports = del;
