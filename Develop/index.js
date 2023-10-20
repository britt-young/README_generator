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
      message: "Please provide a list of contents within your README file (optional).",
      title: "contents",
    },
    {
      type: "installation",
      message: "Please provide intallation instructions needed.",
      name: "install",
    },
    {
      type: "usage",
      message: "Please provide relevant usage information.",
      text: "usage",
    },
    {
      type: "license",
      message: "What licensing is being used?",
      name: "license",
    },
    {
      type: "contributions",
      message: "Please include all contributors and contribution guidelines.",
      text: "contributions",
    },
    {
      type: "tests",
      message: "Inlcude all tests conducted for your project with necessary instructions.",
      name: "tests",
    },
    {
      type: "questions",
      message: "ADDITIONAL QUESTIONS NEED TO BE ADDED HERE!!!!",
      name: "questions",
    },
  ])

  .then((response) =>

  );

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
