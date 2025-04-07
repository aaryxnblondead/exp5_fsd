const fs = require('fs');

// fs.writeFileSync('./test.txt', 'Yooo Aaryan');

// const result = fs.readFileSync('./test.txt', 'utf-8');
// console.log(result);

fs.appendFileSync('./test.txt', `${Date.now()}`);
fs.readFile("./test.txt", "utf-8", (err, data) => {
    if(err) {throw err;
    console.log(data);
    }
    else {
        console.log(data);
    }
});