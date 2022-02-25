// create HTML for each employee
function generatePage(employeeArray){
    return `
        <DOCTYPE html>
        <html lang="en>

        <head>
            <meta charset="UTF=8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Team Webpage</title>
        </head>

        <body>
            <header>
                <div class="container flex-row justify-space-between align-center">
                    <h1 class="text-secondary bg-dark">My Team</h1>
            </header>
            <main class="container">
                <h2 class="employee-item-name text-light>${this.manager.name}</h2>
                <h3 class="employee-item-role text-light">${this.manager.role}</h3>
                    <div class="container">
                        <p>ID: ${this.manager.id}</p>
                        <p>Email: <a href="${this.manager.email}"</a></p>
                        <p>Office #: ${this.manager.office}</p>
                    </div>

                <h2 class="employee-item-name text-light>${this.intern.name}</h2>
                <h3 class="employee-item-role text-light">${this.intern.role}</h3>
                    <div class="container">
                        <p>ID: ${this.intern.id}</p>
                        <p>Email: <a href="${this.intern.email}"</a></p>
                        <p>School: ${this.intern.school}</p>
                    </div>
                <h2 class="employee-item-name text-light>${this.engineer.name}</h2>
                <h3 class="employee-item-role text-light">${this.engineer.role}</h3>
                    <div class="container">
                        <p>ID: ${this.engineer.id}</p>
                        <p>Email: <a href="${this.engineer.email}"</a></p>
                        <p>GitHub: ${this.engineer.github}</p>
                    </div>
            </main>
        </body>
        </html>
        `;
        
}

module.exports = generatePage;