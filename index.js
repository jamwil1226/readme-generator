//Packages
const fs = require('fs');
const inquirer = require('inquirer');
const chalk = require('chalk');
const generateMarkdown = require('./utils/generateMarkdown.js');

//Array of questions
const questions = [
    {
        type: 'input',
        name: 'message',
        message: chalk.red(`Welcome to my Professional Readme Generator! 
        Answer the following questions to generate a professional Readme for your project!
        Press Enter to get started now.
        `)
    },
    {
        type: 'input',
        name: 'tips',
        message: chalk.cyan(`Here are some Markdown Tips to keep in mind when providing your answers. Press Enter to begin creating your Readme now!
        
        ==============
        Markdown Tips
        ==============
        Bold    **bold text**
        Italic  *italicized text*
        Link    [text](https://www.url.com)
        Image   ![alt text](image.jpg)
        `)
    },
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
              return true;
            } else {
              console.log('Please provide the title of the project.');
              return false;
            }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project. (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('Please provide a description of the project.');
              return false;
            }
        }
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions of the project. (Required)',
        validate: installationInput => {
            if (installationInput) {
              return true;
            } else {
              console.log('Please provide installation instructions of the project.');
              return false;
            }
        }
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide the usage information of the project. (Required)',
        validate: usageInput => {
            if (usageInput) {
              return true;
            } else {
              console.log('Please provide usage information of the project.');
              return false;
            }
        }
      },
      {
        type: 'checkbox',
        name: 'license',
        message: 'What type of license does the project have? (Check all that apply)',
        choices: ['MIT', 
        'GNU AGPLv3', 
        'GNU GPLv3', 
        'GNU LGPLv3', 
        'Mozilla Public License 2.0', 
        'Apache License 2.0', 
        'Boost Software License 1.0', 
        'The Unlicense']
      },
      {
        type: 'checkbox',
        name: 'badge',
        message: 'Check the link of your license to display the badge.(Check all that apply)',
        choices: ['[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)', 
        '[![License: GNU AGPLv3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)', 
        '[![License: GNU GPLv3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)', 
        '[![License: GNU LGPLv3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)', 
        '[![License: Mozilla Public License 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)', 
        '[![License: Apache License 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)', 
        '[![License: Boost Software License 1.0](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)', 
        '[![License: The Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)']
      },
      {
        type: 'input',
        name: 'contributor',
        message: 'Provide the contributor to the project. (Required)',
        validate: contributorInput => {
            if (contributorInput) {
              return true;
            } else {
              console.log('Please provide the contributor of the project.');
              return false;
            }
        }
      },
      {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link for the contributor to the project. (Required)',
        validate: githubInput => {
            if (githubInput) {
              return true;
            } else {
              console.log('Please provide the GitHub link for the contributor to the project.');
              return false;
            }
        }
      },
      {
        type: 'confirm',
        name: 'addContributor',
        message: 'Would you like to add another contributor to the project?',
        default: false
      },
      {
        type: 'input',
        name: 'anotherContributor',
        message: 'Provide the name of another contributor to the project.',
        when: ({ addContributor }) => addContributor
      },
      {
        type: 'input',
        name: 'anotherGithub',
        message: 'Provide GitHub link for the added contributor to the project.',
        when: ({ addContributor }) => addContributor
      },
      {
        type: 'input',
        name: 'tests',
        message: 'If there were tests performed, include that information here.'
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub link to be added into the Questions Section of the project. (Required)',
        validate: linkInput => {
            if (linkInput) {
              return true;
            } else {
              console.log('Please provide your GitHub link.');
              return false;
            }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address to be added into the Questions Section of the project. (Required)',
        validate: emailInput => {
            if (emailInput) {
              return true;
            } else {
              console.log('Please provide your email address.');
              return false;
            }
        }
      }
];

// Let user know the Readme has been generated
const readmeCompleted = chalk.green(`
Congratulations! Your Readme has been created! Check the Results folder!`)

// function to write README file
const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log(readmeCompleted)
    );
}


//Function to initialize the generator 
const init = async () => {
    try {
        const data = await inquirer.prompt(questions);
        writeToFile('./results/README.md', generateMarkdown(data));
    } catch (err) {
        console.log(err);
    }
}

//Function call to initialize the generator
init();


