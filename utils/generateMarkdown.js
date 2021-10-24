// function to generate markdown for README
const generateMarkdown = (data) => {

   
  
    //Table of contents
    let tableOfContents = `\n## Table of Contents\n`
    if (data.installation) { tableOfContents += `* [Installation](#installation)\n`; }
    if (data.usage) { tableOfContents += `* [Usage](#usage)\n`; }
    if (data.license) { tableOfContents += `* [License](#license)\n`; }
    if (data.contributor) { tableOfContents += `* [Contributor](#contributor)\n`; }
    if (data.tests) { tableOfContents += `* [Tests](#tests)\n`; }    
    
  
    //date for the license copyright
    let year = new Date();
  
    //Project title
    let readmeTemplate = `# ${data.title}\n`;
  
    //license badge
    readmeTemplate += `\n${data.badge}\n\n---\n`;

    //Project description 
    readmeTemplate += `\n## Description\n${data.description}\n`;
  
    //Table of contents
    readmeTemplate += tableOfContents;
  
    //Installation
    readmeTemplate += `\n## Installation\n${data.installation}\n`;
  
    //Usage
    readmeTemplate += `\n## Usage\n${data.usage}\n`;

    //License information
    readmeTemplate += `\n## License \nThe license for this project is the ${data.license}.\n\nCopyright \u00A9 ${year.getFullYear()}\n`;
  
    //Contributors
    readmeTemplate += `\n## Contributor\n${data.contributor}\n`;
    readmeTemplate += `\nGitHub: [@${data.link}](https://github.com/${data.link}/)\n`;

    //Add another contributor if added
    if (data.addContributor) {
      readmeTemplate += `\n## Addtional Contributors\n${data.anotherContributor}\n`;
    }
    if (data.addContributor) {
        readmeTemplate += `\nGitHub: [@${data.anotherGithub}](https://github.com/${data.anotherGithub}/)\n`;
    }

    //Test
    if (data.tests) {
        readmeTemplate += `\n## Tests\n${data.tests}\n`;
    }
  
    //Questions
    readmeTemplate += `\n## Questions\n*If you have any questions, please reach out to me at* \n\nGitHub: [@${data.github}](https://github.com/${data.github}/)\n\nEmail: [${data.email}](mailto:${data.email})\n`;
  
    
    return readmeTemplate;
  
} //End of generateMarkDown function
  
module.exports = generateMarkdown;
