/**
 * import the necessary packages
 */
const path = require("path")
const fs = require('fs')


/**
 * tell node where to store your data by defining the paths
 */

//get the path to the data file
const DATA_DIR = path.join(__dirname, '../data')
//get the path to the task.json file
const TASK_FILE = path.join(DATA_DIR, 'tasks.json')



/**
 * initialize storage

 */
const initializeStorage = () =>{
    try{
        //check if dir exists, if not create one
        if(!fs.existsSync(DATA_DIR)){
            fs.mkdirSync(DATA_DIR)
        }
        //check if file exits, if not create one
        if(!fs.existsSync(TASK_FILE)){
            const initialData ={
                tasks: []
            }

            fs.writeFileSync(TASK_FILE, JSON.stringify(initialData, null,2))
        }

    }catch(e){
        console.log("error initializing storage:", e.message)
    }
}


/**
 * write fuction to read tasks

 */
const readTasks =()=>{

    try{
    // read the file and store content in a variable
    const data = fs.readFileSync(TASK_FILE, "utf8")

    //parse the data as stringified JSON
    return JSON.parse(data).tasks;

    }catch(e){
        console.error("Error reading tasks:", e.message)
        return []
    }
}

/**
 * write function to save tasks
 */

const saveTasks = (task) =>{
    try{

        const data = {
            tasks: task
        }
        fs.writeFileSync(TASK_FILE, JSON.stringify(data, null, 2))
    }catch(e){
        console.error('Error saving task:', e.message)
    }

}


/**
 * export the functions
 */

module.exports = {
    initializeStorage,
    readTasks,
    saveTasks
}
