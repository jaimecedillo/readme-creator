// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}

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
`;
}

module.exports = generateMarkdown;
