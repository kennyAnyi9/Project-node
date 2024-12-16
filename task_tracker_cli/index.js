#!/usr/bin/env node
const storage =  require('./utils/storage')
const add = require('./commands/add-task')
const del = require('./commands/delete-task')
const list = require('./commands/list-tasks')
const update = require('./commands/update')
const updateStatus = require('./commands/update-status')
console.log("CLI is working")

storage.initializeStorage();
const [, , command, ...args] = process.argv


switch (command) {
  case 'add':
    add(args.join(' '));
    break;
  case 'del':
    del(args[0]);
    break;
  case 'list':
    list(args[0]);
    break;
  case "update":
    update(args[0], args[1]);
    break;
  case "status":
    updateStatus(args[0], args[1])
    break;

  default:
    break;
}
