//TODO: Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license === "MIT License") {
    return "[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "GNU General Public License v3") {
    return "[![GPLv3 License](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else {
    // If there is no license, return an empty string
    return "";
  }
}

// TODO: Create a function that returns the license link
function renderLicenseLink(license) {
  if (license === "MIT License") {
    return "(https://opensource.org/licenses/MIT)";
  } else if (license === "GNU General Public License v3") {
    return "(https://www.gnu.org/licenses/gpl-3.0)";
  } else {
    // If there is no license, return an empty string
    return "";
  }
}

// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {
  if (license === "MIT License") {
    return "This project is licensed under the MIT License - see the [MIT License](https://opensource.org/licenses/MIT) for details.";
  } else if (license === "GNU General Public License v3") {
    return "This project is licensed under the GNU General Public License v3 - see the [GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0) for details.";
  } else {
    // If there is no license, return an empty string
    return "";
  }
}

//export to make functions available to other sections of code
module.exports = {
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
};
