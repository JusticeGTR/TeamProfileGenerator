const inquirer = require('inquirer')
const fs =  require('fs')
const create = require('generateHTML')

//user starts the app - node index.js
//user gets prompted with questions regarding the manager
//answers from user are added to employee array
//then user is prompted is next employee member intern, engineer or no more
//if engineer
    //do engineer stuff
//if intern
    //do intern stuff

    //--> both these lead to asking if theres another employee

//if no more


//general questions
const memberQuestions = [
    {
        type: 'input',
        message: 'What is the team member\'s name?',
        name: 'name',
      },
      {
        type: 'input',
        message: 'What is the team member\'s id number?',
        name: 'id',
      },
      {
        type: 'input',
        message: 'What is the team member\'s email adress?',
        name: 'email',
      },
      {
        type: 'list',
        message: 'What is the team member\'s role?',
        name: 'license',
        choices: ['Manager', 'Engineer', 'Intern'],
      },
]

//specialized questions
const managerQuestions = [
    {
        type: 'input',
        message: 'What is the manager\'s office number?',
        name: 'officeNumber',
      },
]

const engineerQuestions = [
    {
        type: 'input',
        message: 'What is the engineer\'s GitHub username?',
        name: 'github',
      },
]

const internQuestions = [
    {
        type: 'input',
        message: 'What is the intern\'s school?',
        name: 'school',
      },
]

function newMemberQuestions() {
    inquirer
    .prompt(memberQuestions())
     .then
}

function memberType() {
    //prompt user about what type of employee in seperate function that decides what type of questions are done next. if engineer, inputEngineer, etc
    //else, generateHTML()
    
}



//seperate functions to input each type of member, called in memberType function
//in seperate member input functions, call mememberType again to add someone else

//function to write html file 
function writeToFile(filename, data) { //write html string?
    fs.writeFile(filename, data, function(err){
        if(err)
            return console.log(err);
        console.log(data)
        
    })
}

//function to initialize app
function init() {
    inquirer
.prompt (questions) 
    .then((response) =>
        writeToFile('README.md', create(response))
);
}

// Function call to initialize
init();