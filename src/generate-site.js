const fs = require("fs");

const writeHTML = pageContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile("./dist/index.html", pageContent, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: "HTML created!"
            });
        });
    });
};

const copyCSS = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile("./src/style.css", "./dist/style.css", err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: "Style sheet copied!"
            });
        });
    });
};

module.exports = { writeHTML, copyCSS };