// create HTML for each employee
const employeeElement = employeeData => {
    const { name, id, email, role, } = employeeData;
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
                <h2 class="employee-item-name text-light>${name}</h2>
                <h3 class="employee-item-role text-light">${role}</h3>
                    <div class="container">
                        <p>ID: ${id}</p>
                        <p>Email: <a href="${email}"</a></p>
                    </div>
            </main>
        </body>
        </html>
        `;
        
}

module.exports = employeeElement;