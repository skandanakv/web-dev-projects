/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/


import inquirer from 'inquirer';
import qr from "qr-image";
// var qr = require('qr-image');
import fs from "fs";

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        message:"type in ur URL:",
        name:"URL"
    },

  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url=answers.URL;
    var qr_svg = qr.image(url);
qr_svg.pipe(fs.createWriteStream("qr_img.png"));
fs.writeFile('url.txt', url, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  }); 
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });




 

 
var svg_string = qr.imageSync('I love QR!', { type: 'svg' });