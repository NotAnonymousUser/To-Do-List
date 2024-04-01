#! /usr/bin/env node

import inquirer from "inquirer";

let todolist = [];
let condition = true;

while (condition) {
  let newTask = await inquirer.prompt([
    {
      name: "add",
      type: "input",
      message: "Enter your task",
    },
    {
      name: "addMore",
      type: "confirm",
      message: "do you want to add more tasks",
      default: "false",
    },
  ]);

  todolist.push(newTask.add);
  condition = newTask.addMore;
  console.log(todolist);
}
