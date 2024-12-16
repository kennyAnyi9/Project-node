/**
 * Make all the necessary imports
 * Tell node where to find your data
 * initialize storage at the location of your data
 * write function to read all tasks from the storage
 * write function to also save tasks to the storage
 * export the functions to be used in other files
 */

//make all the necessary imports
const path = require('path')
const fs = require('fs')

//tell node where to locate your data

const DATA_DIR = path.join(__dirname, "../data")
const JSON_FILE = path.join(DATA_DIR, 'tasks.json')

//initialize storage
const initializeStorage = () =>{
  try{
     //check if data directory exists, if not create one
     if(!fs.existsSync(DATA_DIR)){
      fs.mkdirSync(DATA_DIR)
     }
     if(!fs.existsSync(JSON_FILE)){


  //check if task.json file exists, if not create one
   const initialData = {
    tasks: []
   }
//write file to task.json
   fs.writeFileSync(JSON_FILE, JSON.stringify(initialData, null, 2))
  }
  } catch(e){
    console.log("Error initializing storage:", e.message)
    process.exit(1)
  }


}


//wirte fuction to read all tasks from storage

const readTasks = () =>{
  try{
  //you read and store in it in a variable
  const data = fs.readFileSync(JSON_FILE, 'utf8');
 //parse the data and return the tasks
  return JSON.parse(data).tasks

  }catch(e){
    console.log('error reading tasks:', e.message)
    return[];
  }
}

//write function to save tasks

const saveTasks =(task)=>{
  // I think we sortof have to take the task from the function args and write it to the task.json

  try{
      const data = {
        tasks: task
      }

      fs.writeFileSync(JSON_FILE, JSON.stringify(data, null, 2))
  }catch(e){
    console.log('Error saving task:', e.message)
  }

}


//export the necessary functions
module.exports = {
  initializeStorage,
   readTasks,
   saveTasks
}
