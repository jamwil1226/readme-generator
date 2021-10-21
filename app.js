const inquirer = require('inquirer');

const fs = require('fs');
//const generatePage = require('./readme.md');

//const pageReadme = generatePage(portfolioData);

//fs.writeFile('./readme.md', pageReadme, err => {
  //if (err) throw err;

  //console.log('Readme file created! Check out readme.md to see the output!');
//});



  const promptProject = portfolioData => {
    console.log(`
  =================
  Add a ReadMe File
  =================
  `);
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project. (Required)'
      },
      {
        type: 'checkbox',
        name: 'tableOfContents',
        message: 'What would like to be part of the Table of Contents? (Check all that apply)',
        choices: ['Installation', 'Usage', 'Credits', 'License']
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions of the project. (Required)'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide the usage information of the project. (Required)'
      },
      {
        type: 'checkbox',
        name: 'license',
        message: 'What type of license does the project have? (Check all that apply)',
        choices: ['MIT', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'Boost Software License 1.0', 'The Unlicense']
      },
      {
        type: 'input',
        name: 'contributor',
        message: 'Provide the contributor to the project. (Required)'
      },
      {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link for the contributor to the project. (Required)'
      },
      {
        type: 'confirm',
        name: 'contributors',
        message: 'Would you like to add another contributor to this project?',
        default: false
      },
      {
        type: 'input',
        name: 'tests',
        message: 'If there were tests performed, include that information here.'
      },
      {
        type: 'confirm',
        name: 'questions',
        message: 'Are you available to answer questions about this project?',
        default: false
      },
      {
        type: 'input',
        name: 'link',
        message: 'Enter your GitHub link to be added into the Questions Section of the project. (Required)'
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your emails address to be added into the Questions Section of the project. (Required)'
      }
    ])
  };

  
  promptProject()
 .then(portfolioData => console.log(portfolioData));
    //return generatePage(portfolioData);

 //.then(pageReadme => {
  // return writeFile(pageReadme);
  //})
 //.then(writeFileResponse => {
   //console.log(writeFileResponse);
  // return copyFile();
  //})
 //.then(copyFileResponse => {
   // console.log(copyFileResponse);
 //})
 //.catch(err => {
   //console.log(err);
 //});


 