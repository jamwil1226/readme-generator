// function to generate markdown for README
const generateMarkdown = (data) => {

    //License badges - THIS SWITCH/CASE IS NOT WORKING AND I'M NOT SURE WHY!!
    switch (data.license) {
        case 'MIT':
            licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
        break;
        case 'GNU AGPLv3':
            licenseBadge = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
        break;
        case 'GNU GPLv3':
            licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
        break;
        case 'GNU LGPLv3':
            licenseBadge = `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`;
        break;
        case 'Mozilla Public License 2.0':
            licenseBadge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
        break;
        case 'Apache License 2.0':
            licenseBadge = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
        break;
        case 'Boost Software License 1.0':
            licenseBadge = `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
        break;
        case 'The Unlicense':
            licenseBadge = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
        break;
        default:
        break;
    }
  
    //able of contents
    let tableOfContents = `\n## Table of Contents\n`
    if (data.installation) { tableOfContents += `* [Installation](#installation)\n`; }
    if (data.usage) { tableOfContents += `* [Usage](#usage)\n`; }
    if (data.credits) { tableOfContents += `* [Credits](#credits)\n`; }
    if (data.license) { tableOfContents += `* [License](#license)\n`; }
    if (data.tests) { tableOfContents += `* [Tests](#tests)\n`; }
    if (data.questions) { tableOfContents += `* [Questions](#questions)\n`; }
    
  
    //date for the license copyright
    let year = new Date();
  
    //Project title
    let readmeTemplate = `# ${data.title}\n`;
  
    //license badge
    readmeTemplate += `\n${licenseBadge}\n\n---\n`;
  
    //Project description 
    readmeTemplate += `\n## Description\n${data.description}\n`;
  
    //Table of contents
    readmeTemplate += tableOfContents;
  
    //Installation
      readmeTemplate += `\n## Installation\n${data.installation}\n`;
  
    //Usage
      readmeTemplate += `\n## Usage\n${data.usage}\n`;

    //License information
      readmeTemplate += `\n## License \nLicensed under the ${data.license} License. Copyright \u00A9 ${year.getFullYear()}\n`;
  
    //Contributors
      readmeTemplate += `\n## Contributors\n${data.contributor}\n`;

    //Add another contributor if added
    if (data.addContributor != []) {
        for (const value of data.anotherContributor) {
          readmeTemplate += `\n* ${value.anotherContributor}\n`;
        }
      }
  
    //Test
    if (data.test) {
      readmeTemplate += `\n## Tests\n${data.test}\n`;
    }
  
    //Questions
    readmeTemplate += `\n## Questions\n*If you have any questions, please reach out to me at* \n\nGitHub: [@${data.github}](https://github.com/${data.github}/)\n\nEmail: [${data.email}](mailto:${data.email})\n`;
  
    
    return readmeTemplate;
  
} //End of generateMarkDown function
  
module.exports = generateMarkdown;
