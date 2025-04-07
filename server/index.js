const http = require('http');
const fs = require('fs');
const myserver = http.createServer((req, res) => {
    const log = `${Date.now()}: New Req Received\n`;
    fs.appendFile("log.txt", log, (err) => {
        if (err) {
            console.log(err);
        }
    });
});

myserver.listen(3000, () => {
    console.log("Server is running on port 3000");
});