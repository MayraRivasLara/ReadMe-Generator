// TODO: Create a function that returns a license badge based on which license is passed in
function generateMarkdown(data) {
  if (data.license === "MIT License") {
    data.license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }
  if (data.license === "The Perl License") {
    data.license = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
  }
  if (data.license === "Boost Software License 1.0") {
    data.license = "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";
  }
}


return `# Index
  1. [Title](#title)
  2. [Table of Contents](#contents)
  3. [Installation](#installation)
  4. [Usage](#usage)
  5. [Contributions](#contributions)
  6. [Test Instructions](#test)`

// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
