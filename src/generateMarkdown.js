// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ----

  ## Description
  ${data.description}<br />

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

## Installation
${data.installation}

## Usage
${data.usage}

## License
![badge] ((https://img.shields.io/badge/license-${data.license}-yes-green.svg)<br />

This application is covered by the ${data.license} license.

## Contributing
${data.credits}

## Tests
${data.test}

## Questions

If you run into an issue:
${data.question}<br />

Find me on GitHub :octocat: : [${data.github}](https://github.com/${data.github})<br />

Email me me with any questions or concerns: [My Email](mailto:${data.email})<br />

`;
}

module.exports = generateMarkdown;
