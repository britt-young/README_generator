//pull functions from licenseFunctions.js
const {
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
} = require("./licenseFunctions");

const renderTableOfContents = require("./tableOfContentsFunction");

//generate markdown for README file using required licene data and answers from inquirer prompt
function generateMarkdown(answers) {
  const tocSelection = renderTableOfContents(answers.tableOfContents)
  const licenseBadge = renderLicenseBadge(answers.license);
  const licenseLink = renderLicenseLink(answers.license);
  const licenseSection = renderLicenseSection(answers.license);

  return `# ${answers.title}
  
  ${licenseBadge} ${licenseLink}

  ## Description
  ${answers.description}
  
  ## Table of Contents
  [${answers.tableOfContents.join("\n")}] ${tocSelection}
  
  ## Installation
  ${answers.installation || "No installation instructions provided."}
  
  ## Usage
  ${answers.usage || "No usage information provided."}
  
  ## License
  ${answers.license || "No license information provided."}
  ${licenseSection}
  
  ## Contributions
  ${answers.contributions || "No contribution information provided."}
  
  ## Tests
  ${answers.tests || "No test information provided."}
  
  ## Questions
  Please feel free to reach out to me with any questions regarding the README Generator project
  GitHub: [${answers.username}](https://github.com/${answers.username})
  Email: ${answers.email}
    `;
}
module.exports = generateMarkdown;
