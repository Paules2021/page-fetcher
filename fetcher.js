const request = require('request');
const fs = require('fs')

const input=process.argv.slice(2)
if (args.length !== 2) {
  console.log("Invalid Input!");
  process.exit();
}
let url=input[0]
let path=input[1]

const fetcher = function (url, path) {
  request(url, (error, response, body) => {
    fs.writeFile(path, body, error => {
      if (error) {
        console.log(error);
        return;
      }
      console.log("Downloaded and saved " + body.length + " bytes to " + path);
    });
  });
}

fetcher(url, path);
