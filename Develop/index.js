// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: "title",
      message: "Please provide a title for your README file",
      title: "title",
    },
    {
      type: "description",
      message: "Please provide a short description.",
      text: "description",
    },
    {
      type: "table of contents",
      message: "Please select what you want to include in your README table of contents (optional).",
      choices: [
        "Installation",
        "Usage",
        "License",
        "Contributions",
        "Test",
        "None"
      ]
    },
    {
      type: "installation",
      message: "Please provide intallation instructions needed.",
      install: "install",
    },
    {
      type: "usage",
      message: "Please provide relevant usage information including examples and/or screenshots.",
      usage: "usage",
    },
    {
      type: "license",
      message: "What licensing is being used?",
      choices: [
        "MIT License",
        "GNU General Public License v3",
        "None"
      ]
    },
    {
      type: "contributions",
      message: "Please include all contributors and contribution guidelines to include GitHub profiles and all third-party assets.",
      contributions: "contributions",
    },
    {
      type: "tests",
      message: "Provide examples on how to run your test code and the expected results.",
      tests: "tests",
    },
    {
      type: "questions",
      message: "Please enter your GitHub username",
      username: "username",
    },
    {
      type: "questions",
      message: "Please enter your email address",
      email: "email",
    },
  ])
//replace "content"
  .then((data) => {
      fs.writeFile("file name here", content, (err)=>err?console.error(err):console.log("success!")),
  });

//log.txt file to store data????
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
