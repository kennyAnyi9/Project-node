#!/usr/bin/env node
const storage = require('./utils/storage')
const add = require('./commands/add')
const del = require('./commands/delete')
console.log("CLI is working")



storage.initializeStorage();

const [, , command, ...args] = process.argv;

switch(command){
    case "add":
         add(args.join(' '));
        break;
    case 'del':
        del(args[0])
        console.log(args)
        break;

    default:
        console.log("Unknown command, try again")
        process.exit(1)
}
