// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  switch (data) {
    case 'MIT':
      return `![License:MIT](https://img.shields.io/badge/License-MIT-green)`;
    case 'APACHE 2.0':
      return `![License:APACHE 2.0](https://img.shields.io/badge/License-APACHE%202.0-green)`
    case 'GPL 3.0':
      return `![License:GPL 3.0](https://img.shields.io/badge/License-GPL%203.0-green)`
    case 'BSD 3':
      return `![License:BSD 3](https://img.shields.io/badge/License-BSD%203-green)`
    default:
      return '';
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  switch (data) {
    case 'MIT':
      return `[${renderLicenseBadge(data)}](https://opensource.org/licenses/MIT)`;
    case 'APACHE 2.0':
      return `[${renderLicenseBadge(data)}](https://opensource.org/licenses/Apache-2.0)`;
    case 'GPL 3.0':
      return `[${renderLicenseBadge(data)}](https://www.gnu.org/licenses/gpl-3.0)`;
    case 'BSD 3':
      return `[${renderLicenseBadge(data)}](https://opensource.org/licenses/BSD-3-Clause)`;
    default:
      return '';
}
} 

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  return renderLicenseLink(data);
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const badge = renderLicenseSection(data.license)

  return `# ${data.title}

  ${badge}
  
  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Questions](#questions)
  
  ## Installation

  To install the necessary dependencies for this project,  \`git clone\` the repo down to your local machine then run the following command:
  \`\`\`
  ${data.install}
  \`\`\`

  ## Usage
  ${data.usage}

  ## License
  This application is licensed under ${data.license}.

  ## Contribution
  ${data.contribution}

  ## Testing
  Please run the following command to test:
  \`\`\`
  ${data.testing}
  \`\`\`
  ---
  
  ## Questions?
  For any questions, please contact me via e-mail. Thank you!
  - E-mail: ${data.email}
  - GitHub: [${data.github}](https://github.com/${data.github})
`;
}

module.exports = generateMarkdown;
