#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let todolist = [];
let condition = true;

while (condition) {
  let newOperation = await inquirer.prompt({
    name: "task",
    type: "list",
    choices: ["Add Task", "Delete Task", "View Task", "Clear List"],
  });

  if (newOperation.task === "Add Task") {
    let newTask = await inquirer.prompt({
      name: "add",
      type: "input",
      message: "Enter your task",
    });
    if (newTask.add === "") {
      console.log(chalk.red(`Error ! Cannot add empty task`));
    } else {
      todolist.push(newTask.add);
      console.log(todolist);
    }
  } else if (newOperation.task === "Delete Task") {
    console.log(todolist);
    if (todolist.length === 0) {
      console.log(chalk.red(`Error ! Cannot delete from an empty list`));
    }
    let removeTask = await inquirer.prompt({
      name: "delete",
      type: "list",
      choices: ["Delete First Task", "Delete Last Task"],
    });
    if (removeTask.delete === "Delete First Task") {
      let firstElement = todolist.shift();
      console.log(chalk.red(`${firstElement} is removed`));
      console.log(todolist);
    } else if (removeTask.delete === "Delete Last Task") {
      let lastElement = todolist.pop();
      console.log(chalk.red(`${lastElement} is removed`));
      console.log(todolist);
    }
  } else if (newOperation.task === "View Task") {
    console.log(todolist);
    console.log(`You have ${todolist.length} tasks todo`);
  } else if (newOperation.task === "Clear List") {
    todolist = [];
    console.log(chalk.green(`Your TODO list is now deleted`));
  }

  let nextOperation = await inquirer.prompt({
    name: "moreOperation",
    type: "confirm",
    message: "do you want to perform more operations",
    default: "false",
  });
  condition = nextOperation.moreOperation;
  console.log(todolist);
}
