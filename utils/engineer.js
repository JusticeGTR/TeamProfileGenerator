const Employee = require('./employee')

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
    }
}

module.exports = Engineer;