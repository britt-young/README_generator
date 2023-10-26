//call in packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

//"questions" array of questions for user input necessary to build README file
const questions = [
  {
    type: "input",
    name: "title",
    message: "Please provide a title for your README file.",
    validate: function (input) {
      return input !== '' ? true : 'Title cannot be empty';
    },
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a short description.",
    validate: function (input) {
      return input !== '' ? true : 'Description cannot be empty';
    },
  },
  {
    type: "checkbox",
    name: "tableOfContents",
    message:
      "Please select what you want to include in your README table of contents.",
      validate: function (input) {
        return input !== '' ? true : 'Must include a Table of Contents';
      },
    choices: [
      "Installation",
      "Usage",
      "License",
      "Contributions",
      "Test"
    ]
  },
  {
    type: "input",
    name: "installation",
    message: "Please provide intallation instructions needed.",
    validate: function (input) {
      return input !== '' ? true : 'Installation cannot be empty';
    },
  },
  {
    type: "input",
    name: "usage",
    message:
      "Please provide relevant usage information including examples and/or screenshots.",
      validate: function (input) {
        return input !== '' ? true : 'Usage cannot be empty';
      },
  },
  {
    type: "checkbox",
    name: "license",
    message: "What licensing is being used?",
    validate: function (input) {
      return input !== '' ? true : 'Must include a license';
    },
    choices: [
      "MIT License",
      "GNU General Public License v3"
    ]
  },
  {
    type: "input",
    name: "contributions",
    message:
      "Please include all contributors and contribution guidelines to include GitHub profiles and all third-party assets.",
      validate: function (input) {
        return input !== '' ? true : 'Contribution cannot be empty';
      },
  },
  {
    type: "input",
    name: "tests",
    message:
      "Provide examples on how to run your test code and the expected results.",
      validate: function (input) {
        return input !== '' ? true : 'Test cannot be empty';
      },
  },
  {
    type: "input",
    name: "username",
    message: "Please enter your GitHub username",
    validate: function (input) {
      return input !== '' ? true : 'Must provide username';
    },
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email address",
    validate: function (input) {
      return input !== '' ? true : 'Email cannot be empty';
    },
  },
];

//create function to write README file and display console message when completed
function writeToFile(answers) {
  const markdownContent = generateMarkdown(answers);
  fs.writeFile("README.md", markdownContent, (err) => {
    if (err) {
      console.error("Error writing to file:", err);
    } else {
      console.log("README created successfully!");
    }
  });
}

// prompt user with questions
inquirer.prompt(questions).then((answers) => {
  writeToFile(answers);
});
