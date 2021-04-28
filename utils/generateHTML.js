//seperate functions to write each type of card? and then call in the <section> in the final function?
function generateManagerCard(data) {
    return `<div class="card col mx-3 h-100 shadow" style="width:300px;">
            <div class="card-body bg-primary text-white">
                <h5 class="card-title memberName">${data.managerName}</h5>
                <p class="card-text memberIcon"><i class="fas fa-mug-hot"></i> <span class="memberRole">Manager</span></p>
            </div>
            <div class="container listContainer">
                <ul class="list-group">
                    <li class="list-group-item">ID:<span class="identNumber">${data.managerId}</span></li>
                    <li class="list-group-item">Email: <span class="email" >${data.managerEmail}</span></li>
                    <li class="list-group-item">Office Number:<span class="officeNumber">${data.officeNumber}</span></li>
                </ul>
            </div>
        </div>
    `
};

function generateEngineerCard(data) {
    return `<div class="card col mx-3 h-100 shadow" style="width:300px">
    <div class="card-body bg-primary text-white">
        <h5 class="card-title memberName">${data.memberName}</h5>
        <p class="card-text memberIcon"><i class="fas fa-glasses"></i> <span class="memberRole">Engineer</span></p>
    </div>
    <div class="container listContainer">
        <ul class="list-group">
            <li class="list-group-item">ID:<span class="identNumber">${data.memberId}</span></li>
            <li class="list-group-item">Email: <span class="email" >${data.memberEmail}</span></li>
            <li class="list-group-item">GitHub: <span class="github">${data.github}</span></li>
        </ul>
    </div>
</div>`
};

function generateInternCard(data) {
    return `<div class="card col mx-3 h-100 shadow" style="width:300px">
    <div class="card-body bg-primary text-white">
        <h5 class="card-title memberName">${data.memberName}</h5>
        <p class="card-text memberIcon"><i class="fas fa-glasses"></i> <span class="memberRole">Engineer</span></p>
    </div>
    <div class="container listContainer">
        <ul class="list-group">
            <li class="list-group-item">ID:<span class="identNumber">${data.memberId}</span></li>
            <li class="list-group-item">Email: <span class="email" >${data.memberEmail}</span></li>
            <li class="list-group-item">School: <span class="school">${data.school}</span></li>
        </ul>
    </div>
</div>`
};

//function to write general html
function generateHTML(data) {
    return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <link rel="stylesheet" href="./assets/style.css">
    <script src="https://kit.fontawesome.com/05e62abe87.js" crossorigin="anonymous"></script>
</head>

<body>
    <header class="bg-danger text-white text-center">
        My Team
    </header>
    <section class="row row-cols-3 display: block justify-content-center mt-5">
        ${generateManagerCard(data)}
        ${generateEngineerCard(data)}
        ${generateInternCard(data)}
    </section>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf"
        crossorigin="anonymous"></script>
</body>

</html>`
};

module.exports = generateHTML;