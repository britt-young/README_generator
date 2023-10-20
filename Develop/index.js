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
        "Description",
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
      message: "Please provide relevant usage information.",
      usage: "usage",
    },
    {
      type: "license",
      message: "What licensing is being used?",
      license: "license",
    },
    {
      type: "contributions",
      message: "Please include all contributors and contribution guidelines.",
      contributions: "contributions",
    },
    {
      type: "tests",
      message: "Inlcude all tests conducted for your project with necessary instructions.",
      tests: "tests",
    },
    {
      type: "questions",
      message: "ADDITIONAL QUESTIONS NEED TO BE ADDED HERE!!!!",
      questions: "questions",
    },
  ])

  .then((data) => {
    const fileName = `${data.name.toLowerCase().split('').join('')}.json`
      fs.writeFile(fileName, JSON.stringify{data, null, '\t'}, (err)=>err?console.error(err):console.log("success!"))
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
