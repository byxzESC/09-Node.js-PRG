// TODO: Create a function that returns a license badge based on which license is passed in

// Acceptances Criteria --- WHEN I choose a license for my application from a list of options
// --- THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none') {
    license = license.split(' ').join('');
    return `https://img.shields.io/badge/LICENSE-${license}-success`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return 'https://choosealicense.com/licenses/mit/';
  } else if (license === 'APACHE 2.0') {
    return 'https://choosealicense.com/licenses/apache-2.0/';
  } else if (license === 'GPL 3.0') {
    return 'https://choosealicense.com/licenses/gpl-3.0/';
  } else if (license === 'BSD 3') {
    return 'https://choosealicense.com/licenses/bsd-3-clause/';
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') {
    return `This project is licensed under the [${license}] license, you can
[Read More](${renderLicenseLink(license)})`;
  }else {
    return "";
  }
}

// Acceptances Criteria --- WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// --- THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

// Acceptances Criteria --- WHEN I enter my GitHub username
// --- THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

// Acceptances Criteria --- WHEN I enter my email address
// --- THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

// Acceptances Criteria --- WHEN I click on the links in the Table of Contents
// --- THEN I am taken to the corresponding section of the README

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}
![${data.license}](${renderLicenseBadge(data.license)})

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

To install necessary dependencies, run the following command: 

${data.dependencies}

## Usage

${data.repoInfo}

## License

${renderLicenseSection(data.license)}


## Contributing

${data.contribution}

## Tests

To run test, run the following command:


${data.testCommand}


## Questions

If you have any questions about the repo, open an issue or contact me directly at ${data.email}. 

You can find more of my work at [here](https://github.com/${data.userName}/).

`;
}

module.exports = { generateMarkdown };
