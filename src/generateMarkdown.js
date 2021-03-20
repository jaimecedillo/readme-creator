// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ----

  ## Description
  ${data.description}\

  ![badge] ((https://img.shields.io/badge/license-${data.license}-yes-green.svg)


## Table of Contents 
- [Installation](#Installation)
- [Usage](#Usage)
- [Credits](#Credits)
- [License](#License)
- [Badges](#Badges)
- [Features](#Features)
- [Contributing](#Contributing)
- [Tests](#Test)
- [Questions](#Questions)

##Installation
#{data.installation}

##Usage
#{data.installation}

##License
![badge] ((https://img.shields.io/badge/license-${data.license}-yes-green.svg)\\

This application is covered by the ${data.license} license.

##Contributing
${data.contributing}

## Tests
${data.tests}

## Questions

If you run into an issue:
${data.questions}\\
:octocat: Find me on GitHub: [${data.github}](https://github.com/${data.github})

Email me me with any questions or concerns: ${data.email}\\

`;
}

module.exports = generateMarkdown;
