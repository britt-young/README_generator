// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = inquirer.prompt([
  {
    type: "input",
    message: "Please provide a title for your README file",
    validate: function (input) {
      return input !== '' ? true : 'Title cannot be empty';
    },
    name: "title",
  },
  {
    type: "input",
    message: "Please provide a short description.",
    validate: function (input) {
      return input !== '' ? true : 'Description cannot be empty';
    },
    name: "description",
  },
  {
    type: "checkbox",
    message:
      "Please select what you want to include in your README table of contents (optional).",
      validate: function (input) {
        return input !== '' ? true : 'Select "none" if you do not wish to include a Table of Contents';
      },
    name: "tableOfContents",
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
    type: "input",
    message: "Please provide intallation instructions needed.",
    validate: function (input) {
      return input !== '' ? true : 'Installation cannot be empty';
    },
    name: "installation",
  },
  {
    type: "input",
    message:
      "Please provide relevant usage information including examples and/or screenshots.",
      validate: function (input) {
        return input !== '' ? true : 'Usage cannot be empty';
      },
    name: "usage",
  },
  {
    type: "checkbox",
    message: "What licensing is being used?",
    validate: function (input) {
      return input !== '' ? true : 'Select "none" if you do not wish to include a license';
    },
    name: "license",
    choices: [
      "MIT License",
      "GNU General Public License v3",
      "None"
    ]
  },
  {
    type: "input",
    message:
      "Please include all contributors and contribution guidelines to include GitHub profiles and all third-party assets.",
      validate: function (input) {
        return input !== '' ? true : 'Contribution cannot be empty';
      },  
    name: "contributions",
  },
  {
    type: "input",
    message:
      "Provide examples on how to run your test code and the expected results.",
      validate: function (input) {
        return input !== '' ? true : 'Test cannot be empty';
      },
    name: "tests",
  },
  {
    type: "input",
    message: "Please enter your GitHub username",
    validate: function (input) {
      return input !== '' ? true : 'Must provide username';
    },
    name: "username",
  },
  {
    type: "input",
    message: "Please enter your email address",
    validate: function (input) {
      return input !== '' ? true : 'Email cannot be empty';
    },
    name: "email",
  },
]);

function writeToFile(answers) {
  // Construct the README content in markdown using the user's inputs
  const readmeContent = `
  # ${answers.title}
  
  ## Description
  ${answers.description}
  
  ## Table of Contents
  ${answers.tableOfContents.join("\n")}
  
  ## Installation
  ${answers.installation || "No installation instructions provided."}
  
  ## Usage
  ${answers.usage || "No usage information provided."}
  
  ## License
  ${answers.license || "No license information provided."}
  
  ## Contributions
  ${answers.contributions || "No contribution information provided."}
  
  ## Tests
  ${answers.tests || "No test information provided."}
  
  ## Questions
  GitHub: [${answers.username}](https://github.com/${answers.username})
  Email: ${answers.email}
    `;

  fs.writeFile("README.md", readmeContent, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("README created successfully!");
    }
  });
}


// TODO: Create a function to write README file
inquirer.prompt(questions).then((answers) => {
  writeToFile(answers);
});

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
