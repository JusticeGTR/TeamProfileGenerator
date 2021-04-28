const inquirer = require('inquirer')
const fs = require('fs')
const create = require('./utils/generateHTML')

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

const employees = []

//questions for each member type
const managerQuestions = [
    {
        type: 'input',
        message: 'What is the manager\'s name?',
        name: 'managerName',
    },
    {
        type: 'input',
        message: 'What is the manager\'s id number?',
        name: 'managerId',
    },
    {
        type: 'input',
        message: 'What is the manager\'s email adress?',
        name: 'managerEmail',
    },
    {
        type: 'input',
        message: 'What is the manager\'s office number?',
        name: 'officeNumber',
    },
]

const addMemberQuestion = [
    {
        type: 'confirm',
        message: 'Would you like to add a new team member?',
        name: 'addMember',
    },
]

const engineerQuestions = [

    {
        type: 'input',
        message: 'What is the team member\'s name?',
        name: 'memberName',
    },
    {
        type: 'input',
        message: 'What is the team member\'s id number?',
        name: 'memberId',
    },
    {
        type: 'input',
        message: 'What is the team member\'s email adress?',
        name: 'memberEmail',
    },
    {
        type: 'input',
        message: 'What is the engineer\'s GitHub username?',
        name: 'github',
    },

]

const internQuestions = [

    {
        type: 'input',
        message: 'What is the team member\'s name?',
        name: 'memberName',
    },
    {
        type: 'input',
        message: 'What is the team member\'s id number?',
        name: 'memberId',
    },
    {
        type: 'input',
        message: 'What is the team member\'s email adress?',
        name: 'memberEmail',
    },
    {
        type: 'input',
        message: 'What is the intern\'s school?',
        name: 'school',
    },
]
//starts off the prompts to fill in manager and then calls memberType to add another member or not
function managerQuestion() {
    inquirer
        .prompt(managerQuestions)
        .then((response) => {
            employees.push(response)
            console.log(employees)
            memberType();
        })
}
//done and write or add another member
function memberType() {
    inquirer
        .prompt(addMemberQuestion)
        .then((response) => {
            if (response.addMember === false) {
                writeToFile();
            } else {
                newMemberQuestion();
            };

        })
}
//what is the new member and then move to ask questions specific to that membertype
function newMemberQuestion() {
    inquirer
        .prompt([{

            type: 'list',
            message: 'What is the new member\'s role?',
            name: 'role',
            choices: ['Engineer', 'Intern'],

        }])
        .then((response) => {
            if (response.role === 'Engineer') {
                engineerQuestion();
            } else {
                internQuestion();
            }
        })

}
//member specific questions and then loop back around to new member add or not
function engineerQuestion() {
    inquirer
        .prompt(engineerQuestions)
        .then((response) => {
            employees.push(response);
            console.log(employees)
            memberType();
        })
}

function internQuestion() {
    inquirer
        .prompt(internQuestions)
        .then((response) => {
            employees.push(response);
            console.log(employees)
            memberType();
        })
}

//function to write html file 
function writeToFile(filename, data) { //write html string?
    fs.writeFile(filename, data, function (err) {
        if (err)
            return console.log(err);
        console.log(data)

    })
}

//function to initialize app
function init() {
    // inquirer
    //     .prompt(managerQuestions)
    //     .then((response) => {
    //         writeToFile('index.html', create(response));
    //     });
    managerQuestion();

}

// Function call to initialize
init();