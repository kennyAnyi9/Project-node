const path = require("path")
const fs = require("fs")
const { isUtf8 } = require("buffer")


// tell node where to store my data

const DATA_DIR = path.join(__dirname, "../../data")
const DATA_FILE = path.join(DATA_DIR, "task.json")

//decalare function to initialize storage

const initializeStorage = () =>{
  //check if data directory exists, if not create one
  try{
    if(!fs.existsSync("DATA_DIR")){
      fs.mkdirSync("DATA_DIR")
    }

    if(!fs.existsSync(DATA_FILE)){
      const initializeData={
        tasks:[]


      };

      fs.writeFileSync(DATA_FILE, JSON.stringify(initializeData, null, 2))
    }



  }catch{
    console.log("something went wrong")
  }
}


const readTasks = () =>{
  try{
      const data = fs.readFileSync(DATA_FILE, "utf-8")
      return JSON.parse(data).tasks;

  }catch{
    console.log("something went wrong")
    return []
  }
}


const saveTasks =()=>{

}
